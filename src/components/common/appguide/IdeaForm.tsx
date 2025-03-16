import React, { useState } from 'react';

interface IdeaFormProps {
  onSubmit: (data: IdeaFormData) => void;
}

export interface IdeaFormData {
  appName: string;
  problem: string;
  audience: string;
  mainFeature: string;
}

const IdeaForm: React.FC<IdeaFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<IdeaFormData>({
    appName: '',
    problem: '',
    audience: '',
    mainFeature: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback('');

    // Simulate API call
    setTimeout(() => {
      onSubmit(formData);
      setFeedback(
        'Your app idea has potential! Consider adding social sharing features to increase user engagement.'
      );
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="guide-card">
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <h3 className="text-xl font-semibold">Refine Your App Idea</h3>
        <p className="text-guide-dark/70 mt-1">
          Get automated suggestions to improve your concept
        </p>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="appName"
            className="text-sm font-medium text-guide-dark">
            App Name
          </label>
          <input
            id="appName"
            name="appName"
            type="text"
            value={formData.appName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-guide-blue/50 focus:border-guide-blue"
            placeholder="e.g., Meal Master"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="problem"
            className="text-sm font-medium text-guide-dark">
            Problem Your App Solves
          </label>
          <textarea
            id="problem"
            name="problem"
            value={formData.problem}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-guide-blue/50 focus:border-guide-blue"
            placeholder="e.g., Meal planning is time-consuming and repetitive"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="audience"
            className="text-sm font-medium text-guide-dark">
            Target Audience
          </label>
          <input
            id="audience"
            name="audience"
            type="text"
            value={formData.audience}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-guide-blue/50 focus:border-guide-blue"
            placeholder="e.g., Busy professionals who cook at home"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="mainFeature"
            className="text-sm font-medium text-guide-dark">
            Main Feature
          </label>
          <input
            id="mainFeature"
            name="mainFeature"
            type="text"
            value={formData.mainFeature}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-guide-blue/50 focus:border-guide-blue"
            placeholder="e.g., AI-powered recipe suggestions"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="guide-button-primary w-full">
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </div>
          ) : (
            'Get Feedback'
          )}
        </button>

        {feedback && (
          <div className="mt-4 p-4 bg-guide-blue/10 text-guide-blue rounded-lg text-sm">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>{feedback}</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default IdeaForm;
