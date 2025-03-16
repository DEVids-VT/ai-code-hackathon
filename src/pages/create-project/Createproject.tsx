import IdeaForm, { IdeaFormData } from '@/components/common/appguide/IdeaForm';
import Section from '@/components/common/appguide/Section';
import { FC, useState } from 'react';

const CreateProject: FC = () => {
  const [showTechDetail, setShowTechDetail] = useState<string | null>(null);

  const handleIdeaSubmit = (data: IdeaFormData) => {};

  return (
    <Section
      id="ideation"
      title="Start with the Idea"
      description="Begin by clearly defining the problem your app will solve and who it's for. This foundation will guide all future decisions."
      accent="blue">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-guide-blue">
            The Ideation Checklist
          </h3>
          <div className="space-y-6">
            {[
              {
                title: 'Problem Statement',
                description:
                  'Define a clear, specific problem that your app solves. The more focused, the better.',
              },
              {
                title: 'User Persona',
                description:
                  'Create detailed profiles of your target users, including their needs, preferences, and pain points.',
              },
              {
                title: 'Market Gap Analysis',
                description:
                  'Research existing solutions and identify gaps that your app can fill with unique value.',
              },
              {
                title: 'Value Proposition',
                description:
                  'Clearly articulate how your app delivers unique value to users compared to alternatives.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start bg-white shadow-md rounded-lg p-4">
                <div className="bg-guide-blue/10 text-guide-blue p-2 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                  <p className="text-guide-dark/70 text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-guide-gray rounded-lg shadow-lg">
            <h4 className="font-semibold text-lg mb-3">Meal Master Example</h4>
            <p className="text-guide-dark/70 text-base">
              <strong>Problem:</strong> Meal planning is time-consuming and
              repetitive.
              <br />
              <strong>Users:</strong> Busy professionals who cook at home.
              <br />
              <strong>Gap:</strong> Existing apps don't personalize based on
              dietary preferences and available ingredients.
              <br />
              <strong>Value:</strong> AI-powered meal suggestions that adapt to
              what's in your kitchen.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <IdeaForm onSubmit={handleIdeaSubmit} />
        </div>
      </div>
    </Section>
  );
};

// Memoize the component if needed
// export default memo(CreateProject);

export default CreateProject;
