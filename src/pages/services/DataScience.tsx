import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Brain,
  Database,
  BarChart3,
  Cloud,
  Code,
  BookOpen,
  ArrowRight,
  Clock,
  Award,
  Users
} from "lucide-react";

const DataScience = () => {
  const courseDetails = [
    { label: "Duration", value: "6 Months", icon: Clock },
    { label: "Total Hours", value: "88.5 Hours", icon: BookOpen },
    { label: "Certification", value: "Yes", icon: Award },
    { label: "Job Assistance", value: "100%", icon: Users },
  ];

  const curriculum = [
    {
      icon: Code,
      title: "Python Programming",
      topics: ["Python Basics", "Data Types", "Functions", "OOP", "NumPy", "Pandas", "Data Manipulation", "File Handling"],
    },
    {
      icon: BarChart3,
      title: "Exploratory Data Analysis",
      topics: ["Data Cleaning", "Visualization (Matplotlib, Seaborn)", "Pattern Detection", "Feature Engineering", "Insights Generation"],
    },
    {
      icon: Database,
      title: "Statistics & Probability",
      topics: ["Descriptive Statistics", "Probability Distributions", "Hypothesis Testing", "ANOVA", "Regression Analysis"],
    },
    {
      icon: Database,
      title: "SQL & Databases",
      topics: ["SQL Queries", "Joins", "Aggregate Functions", "Window Functions", "Stored Procedures", "Database Design"],
    },
    {
      icon: BarChart3,
      title: "Power BI & Tableau",
      topics: ["Dashboard Creation", "DAX Functions", "Data Modeling", "Reporting", "Publishing", "Interactive Visualizations"],
    },
    {
      icon: Cloud,
      title: "Cloud & Data Warehousing",
      topics: ["AWS", "Azure", "GCP", "Snowflake", "ETL Pipelines", "Data Lake", "Data Warehouse Concepts"],
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      topics: ["ML Algorithms", "Supervised/Unsupervised Learning", "Scikit-learn", "Generative AI", "Prompt Engineering", "AI Tools"],
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-6">
              <Brain className="h-4 w-4" />
              <span className="text-sm font-medium">Professional Training Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Data Science & AI Analyst
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Master data analytics, machine learning, and AI tools to become a data-driven professional. Comprehensive training with real-world projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {courseDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10">
                  <detail.icon className="h-4 w-4" />
                  <span className="text-sm">{detail.label}: <strong>{detail.value}</strong></span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="gradient-bg hover:opacity-90">
              <Link to="/contact">
                Enroll Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Curriculum</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete data science and AI training program covering everything you need to succeed
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculum.map((module) => (
              <Card key={module.title} className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                    <module.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{module.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {topic}
                      </span>
                    ))}
                    {module.topics.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        +{module.topics.length - 4} more
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our{" "}
                <span className="gradient-text">Data Science Program?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our comprehensive program is designed to take you from beginner to job-ready professional. With hands-on projects, expert instructors, and 100% job assistance, you'll be prepared for a successful career in data science.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <Users className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Instructors</h4>
                    <p className="text-sm text-muted-foreground">Learn from industry professionals with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Real-World Projects</h4>
                    <p className="text-sm text-muted-foreground">Work on actual business problems and build your portfolio</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Industry Certification</h4>
                    <p className="text-sm text-muted-foreground">Receive a recognized certification upon completion</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Course Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-semibold">6 Months</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Total Hours</span>
                  <span className="font-semibold">88.5 Hours</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Projects</span>
                  <span className="font-semibold">Real-World</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Mode</span>
                  <span className="font-semibold">Online / Offline</span>
                </div>
                <div className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Certification</span>
                  <span className="font-semibold">Yes</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-muted-foreground">Job Assistance</span>
                  <span className="font-semibold text-primary">100%</span>
                </div>
              </div>
              <Button asChild className="w-full mt-6 gradient-bg hover:opacity-90">
                <Link to="/contact">Enroll Now</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DataScience;
