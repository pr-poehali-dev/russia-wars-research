
import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const sections = [
    {
      title: "Введение",
      description: "Актуальность темы, цели и задачи проекта, методология исследования",
      link: "/introduction"
    },
    {
      title: "Хронологический обзор",
      description: "История военных конфликтов от древних времен до современности",
      link: "/overview"
    },
    {
      title: "Причины войн",
      description: "Анализ геополитических, экономических и идеологических факторов",
      link: "/war-causes"
    }
  ];

  return (
    <Layout>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">Войны на территории России</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Исторический анализ военных конфликтов, их причин и влияния на развитие государства
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-10">
        {sections.map((section, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link to={section.link} className="w-full">
                <Button variant="outline" className="w-full">Подробнее</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="bg-muted rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Об этом проекте</h2>
        <p className="mb-6">
          Данный проект представляет собой комплексное исследование военной истории России, 
          анализ причин возникновения конфликтов и их влияния на развитие государства.
        </p>
        <Link to="/introduction">
          <Button>Начать изучение</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Index;
