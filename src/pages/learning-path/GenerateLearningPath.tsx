import { axiosInstance } from '@/components/common/axios-interceptor/AxiosInterceptor';
import { useToastNotification } from '@/hooks/useToastNotification';
import { useUserCredentials } from '@/hooks/useUserCredentials';
import React, { ChangeEvent, FormEvent, useState } from 'react';

interface UserPreferences {
  UserId: string;
  Name: string;
  AgeGroup: string;
  Location: string;
  Language: string;
  Education: string;
  Goals: string;
  LearningStyle: string;
  Pace: string;
  JobRole: string;
  SkillLevel: string;
  TimeAvailability: string;
  Schedule: string;
  Motivators: string[];
  ProgrammingLanguages: string[];
  Technologies: string[];
}

const GenerateLearningPath: React.FC = () => {
  const { user } = useUserCredentials();
  const { emitToast } = useToastNotification();

  const [formData, setFormData] = useState<UserPreferences>({
    UserId: '',
    Name: '',
    AgeGroup: '',
    Location: '',
    Language: '',
    Education: '',
    Goals: '',
    LearningStyle: '',
    Pace: '',
    JobRole: '',
    SkillLevel: '',
    TimeAvailability: '',
    Schedule: '',
    Motivators: [],
    ProgrammingLanguages: [],
    Technologies: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Special handling for comma-separated list inputs
  const handleListChange = (name: keyof UserPreferences, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value.split(',').map((s) => s.trim()),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can process the formData or send it to your API
    const data = {
      ...formData,
      UserId: user.userId,
    };
    const response = await axiosInstance.post(
      'https://hoteach.azurewebsites.net/api/user-preferences',
      data
    );

    if (response.status === 200) {
      emitToast('Saved preferences!', 'success');
    } else {
      emitToast('Error submitting user preferences.', 'error');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4 text-yellow-300">
        HotEACH: Save Preferences
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Transforming aspiring developers into independent creators by combining
        coding education, business strategy, and project execution.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="Name">
            Name
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Age Group */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="AgeGroup">
            Age Group
          </label>
          <select
            id="AgeGroup"
            name="AgeGroup"
            value={formData.AgeGroup}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300">
            <option value="" disabled>
              Select your age group
            </option>
            <option value="under18">Under 18</option>
            <option value="18-24">18-24</option>
            <option value="25-34">25-34</option>
            <option value="35+">35+</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="Location">
            Location
          </label>
          <input
            type="text"
            id="Location"
            name="Location"
            value={formData.Location}
            onChange={handleChange}
            placeholder="Enter your city or country"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Preferred Language */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="Language">
            Preferred Language
          </label>
          <select
            id="Language"
            name="Language"
            value={formData.Language}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300">
            <option value="" disabled>
              Select language
            </option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        {/* Education */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="Education">
            Education
          </label>
          <input
            type="text"
            id="Education"
            name="Education"
            value={formData.Education}
            onChange={handleChange}
            placeholder="Enter your highest education level"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Learning Goals */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="Goals">
            Learning Goals
          </label>
          <textarea
            id="Goals"
            name="Goals"
            value={formData.Goals}
            onChange={handleChange}
            placeholder="What do you hope to achieve?"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Preferred Learning Style */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="learningStyle">
            Preferred Learning Style
          </label>
          <select
            id="LearningStyle"
            name="LearningStyle"
            value={formData.LearningStyle}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300">
            <option value="" disabled>
              Select learning style
            </option>
            <option value="visual">Visual</option>
            <option value="auditory">Auditory</option>
            <option value="kinesthetic">Kinesthetic</option>
            <option value="reading">Reading/Writing</option>
          </select>
        </div>

        {/* Learning Pace */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="Pace">
            Learning Pace
          </label>
          <select
            id="Pace"
            name="Pace"
            value={formData.Pace}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300">
            <option value="" disabled>
              Select pace
            </option>
            <option value="fast">Fast</option>
            <option value="moderate">Moderate</option>
            <option value="slow">Slow</option>
          </select>
        </div>

        {/* Current Job Role */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="JobRole">
            Current Job Role
          </label>
          <input
            type="text"
            id="JobRole"
            name="JobRole"
            value={formData.JobRole}
            onChange={handleChange}
            placeholder="E.g., Student, Developer, Designer"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Current Skill Level */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="SkillLevel">
            Current Skill Level
          </label>
          <select
            id="SkillLevel"
            name="SkillLevel"
            value={formData.SkillLevel}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300">
            <option value="" disabled>
              Select your skill level
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        {/* Time Availability */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="timeAvailability">
            Time Availability
          </label>
          <input
            type="text"
            id="TimeAvailability"
            name="TimeAvailability"
            value={formData.TimeAvailability}
            onChange={handleChange}
            placeholder="E.g., 2 hours per day"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Preferred Schedule */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="Schedule">
            Preferred Schedule
          </label>
          <input
            type="text"
            id="Schedule"
            name="Schedule"
            value={formData.Schedule}
            onChange={handleChange}
            placeholder="E.g., Weekdays, Weekends, Evenings"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Motivators (Comma-separated) */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="motivators">
            Motivators
          </label>
          <input
            type="text"
            id="Motivators"
            name="Motivators"
            value={formData.Motivators.join(', ')}
            onChange={(e) => handleListChange('Motivators', e.target.value)}
            placeholder="E.g., Career growth, Passion for tech"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Programming Languages (Comma-separated) */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="programmingLanguages">
            Programming Languages
          </label>
          <input
            type="text"
            id="ProgrammingLanguages"
            name="ProgrammingLanguages"
            value={formData.ProgrammingLanguages.join(', ')}
            onChange={(e) =>
              handleListChange('ProgrammingLanguages', e.target.value)
            }
            placeholder="E.g., JavaScript, Python, Java"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Technologies (Comma-separated) */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="Technologies">
            Technologies
          </label>
          <input
            type="text"
            id="Technologies"
            name="Technologies"
            value={formData.Technologies.join(', ')}
            onChange={(e) => handleListChange('Technologies', e.target.value)}
            placeholder="E.g., React, Node.js, AWS"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-300 hover:bg-yellow-300 text-white font-bold py-3 px-8 rounded transition duration-300">
            Create Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenerateLearningPath;
