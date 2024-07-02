'use server';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getUser } from "@workos-inc/authkit-nextjs";
import { WorkOS } from "@workos-inc/node";
import Link from "next/link";

export default async function NewListingPage() {
  
  const workos = new WorkOS(process.env.WORKOS_API_KEY);

  // Fetch user data asynchronously
  const { user } = await getUser();

  // If user is not logged in, show a message
  if (!user) {
    return (
      <div className="container">
        <div>You need to be logged in to post a job</div>
      </div>
    );
  }

  // Fetch organization memberships asynchronously
  const organizationMemberships = await workos.userManagement.listOrganizationMemberships({
    userId: user.id,
  });

  // Filter active organization memberships
  const activeOrganizationMemberships = organizationMemberships.data.filter(om => om.status === 'active');

  // Define a type for organizationsNames
  const organizationsNames: { [key: string]: string } = {};
  
  // Prepare to fetch organization names and store in organizationsNames
  for (const activeMembership of activeOrganizationMemberships) {
    const organization = await workos.organizations.getOrganization(activeMembership.organizationId);
    organizationsNames[organization.id] = organization.name;
  }

  return (
    <div className="container">
      <div>
        <h2 className="text-lg mt-6">Your companies</h2>
        <p className="text-gray-500 text-sm mb-2">Select a company to create a job ad for</p>
        <div>
          <div className="border inline-block rounded-md">
            {Object.keys(organizationsNames).map(orgId => (
              <Link
                key={orgId} // Add key prop for each Link
                href={`/new-listing/${orgId}`} // Correct href format
                className={`py-2 px-4 flex gap-2 items-center ${orgId !== Object.keys(organizationsNames)[0] ? 'border-t' : ''}`}>
                {/* Wrap children inside Link */}
                <span>{organizationsNames[orgId]}</span>
                <FontAwesomeIcon className="h-4" icon={faArrowRight} />
              </Link>
            ))}
          </div>
        </div>

        {organizationMemberships.data.length === 0 && (
          <div className="border border-blue-200 bg-blue-50 p-4 rounded-md">
            No companies found assigned to your user
          </div>
        )}

        {/* Wrap Link inside Link component */}
        <Link href="/new-company">
          <a className="inline-flex gap-2 items-center bg-gray-200 px-4 py-2 rounded-md mt-6">
            Create a new company
            <FontAwesomeIcon className="h-4" icon={faArrowRight} />
          </a>
        </Link>
      </div>
    </div>
  );
}
