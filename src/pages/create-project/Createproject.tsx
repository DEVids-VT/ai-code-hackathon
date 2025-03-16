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
