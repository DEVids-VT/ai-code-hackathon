import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MultiSelect } from '@/components/ui/multiselect';

interface UserPreferences {
  userId: string;
  name: string;
  ageGroup: string;
  location: string;
  language: string;
  education: string;
  goals: string;
  learningStyle: string;
  pace: string;
  jobRole: string;
  skillLevel: string;
  timeAvailability: string;
  schedule: string;
  motivators: string[];
  programmingLanguages: string[];
  technologies: string[];
}

const LearningPathForm: React.FC = () => {
  const [formData, setFormData] = useState<UserPreferences>({
    userId: '',
    name: '',
    ageGroup: '',
    location: '',
    language: '',
    education: '',
    goals: '',
    learningStyle: '',
    pace: '',
    jobRole: '',
    skillLevel: '',
    timeAvailability: '',
    schedule: '',
    motivators: [],
    programmingLanguages: [],
    technologies: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMultiSelectChange = (
    name: keyof UserPreferences,
    values: string[]
  ) => {
    setFormData({ ...formData, [name]: values });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Call API to generate learning path here
  };

  return (
    <Card className="p-6 max-w-3xl mx-auto">
      <CardContent>
        <h2 className="text-xl font-bold mb-4">Generate Your Learning Path</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="ageGroup"
            placeholder="Age Group"
            value={formData.ageGroup}
            onChange={handleChange}
          />
          <Input
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
          <Input
            name="language"
            placeholder="Preferred Language"
            value={formData.language}
            onChange={handleChange}
          />
          <Input
            name="education"
            placeholder="Education Level"
            value={formData.education}
            onChange={handleChange}
          />
          <Textarea
            name="goals"
            placeholder="Learning Goals"
            value={formData.goals}
            onChange={handleChange}
          />
          <Input
            name="learningStyle"
            placeholder="Learning Style"
            value={formData.learningStyle}
            onChange={handleChange}
          />
          <Input
            name="pace"
            placeholder="Learning Pace"
            value={formData.pace}
            onChange={handleChange}
          />
          <Input
            name="jobRole"
            placeholder="Current Job Role"
            value={formData.jobRole}
            onChange={handleChange}
          />
          <Input
            name="skillLevel"
            placeholder="Skill Level"
            value={formData.skillLevel}
            onChange={handleChange}
          />
          <Input
            name="timeAvailability"
            placeholder="Time Availability"
            value={formData.timeAvailability}
            onChange={handleChange}
          />
          <Input
            name="schedule"
            placeholder="Preferred Schedule"
            value={formData.schedule}
            onChange={handleChange}
          />
          <MultiSelect
            options={['Career Growth', 'Passion', 'Financial Gains']}
            value={formData.motivators}
            onChange={(values: string[]) =>
              handleMultiSelectChange('motivators', values)
            }
            placeholder="Select Motivators"
          />
          <MultiSelect
            options={['JavaScript', 'Python', 'Java', 'C#']}
            value={formData.programmingLanguages}
            onChange={(values: string[]) =>
              handleMultiSelectChange('programmingLanguages', values)
            }
            placeholder="Select Programming Languages"
          />
          <MultiSelect
            options={['React', 'Angular', 'Node.js', 'Django']}
            value={formData.technologies}
            onChange={(values: string[]) =>
              handleMultiSelectChange('technologies', values)
            }
            placeholder="Select Technologies"
          />
          <Button type="submit" className="w-full">
            Generate Learning Path
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LearningPathForm;
