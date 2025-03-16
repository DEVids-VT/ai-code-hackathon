import React, { useState, ChangeEvent, FormEvent } from 'react';

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

const GenerateLearningPath: React.FC = () => {
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can process the formData or send it to your API
    console.log('User Preferences:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4 text-yellow-300">
        HotEACH: Generate Learning Path
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
            htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Age Group */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="ageGroup">
            Age Group
          </label>
          <select
            id="ageGroup"
            name="ageGroup"
            value={formData.ageGroup}
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
            htmlFor="location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your city or country"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Preferred Language */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="language">
            Preferred Language
          </label>
          <select
            id="language"
            name="language"
            value={formData.language}
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
            htmlFor="education">
            Education
          </label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            placeholder="Enter your highest education level"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Learning Goals */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="goals">
            Learning Goals
          </label>
          <textarea
            id="goals"
            name="goals"
            value={formData.goals}
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
            id="learningStyle"
            name="learningStyle"
            value={formData.learningStyle}
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
            htmlFor="pace">
            Learning Pace
          </label>
          <select
            id="pace"
            name="pace"
            value={formData.pace}
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
            htmlFor="jobRole">
            Current Job Role
          </label>
          <input
            type="text"
            id="jobRole"
            name="jobRole"
            value={formData.jobRole}
            onChange={handleChange}
            placeholder="E.g., Student, Developer, Designer"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Current Skill Level */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="skillLevel">
            Current Skill Level
          </label>
          <select
            id="skillLevel"
            name="skillLevel"
            value={formData.skillLevel}
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
            id="timeAvailability"
            name="timeAvailability"
            value={formData.timeAvailability}
            onChange={handleChange}
            placeholder="E.g., 2 hours per day"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Preferred Schedule */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="schedule">
            Preferred Schedule
          </label>
          <input
            type="text"
            id="schedule"
            name="schedule"
            value={formData.schedule}
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
            id="motivators"
            name="motivators"
            value={formData.motivators.join(', ')}
            onChange={(e) => handleListChange('motivators', e.target.value)}
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
            id="programmingLanguages"
            name="programmingLanguages"
            value={formData.programmingLanguages.join(', ')}
            onChange={(e) =>
              handleListChange('programmingLanguages', e.target.value)
            }
            placeholder="E.g., JavaScript, Python, Java"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Technologies (Comma-separated) */}
        <div>
          <label
            className="block text-red-600 font-semibold mb-2"
            htmlFor="technologies">
            Technologies
          </label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={formData.technologies.join(', ')}
            onChange={(e) => handleListChange('technologies', e.target.value)}
            placeholder="E.g., React, Node.js, AWS"
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-300 hover:bg-yellow-300 text-white font-bold py-3 px-8 rounded transition duration-300">
            Generate Path
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenerateLearningPath;
