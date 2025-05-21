"use client";
import React from "react";
import {
  Page,
  Text,
  View,
  Link,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    color: "#000",
    backgroundColor: "#FFF",
    lineHeight: 1.5,
  },
  section: {
    marginBottom: 15,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },
  text: {
    marginBottom: 4,
  },
  list: {
    marginLeft: 10,
  },
  twoColumn: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  leftColumn: {
    width: "65%",
  },
  rightColumn: {
    width: "35%",
    textAlign: "right",
  },
});

const MyDocument = ({ data }) => {
  console.log("data", data);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={styles.header}>{data.fullName}</Text>
          <Text style={styles.text}>
            Email: {data.email} | Phone: {data.phoneNumber}
          </Text>
          {(data.linkedin || data.github) && (
            <Text style={styles.text}>
              {data.linkedin && (
                <>
                  <Link src={data.linkedin}>LinkedIn</Link>
                  {data.github && " | "}
                </>
              )}
              {data.github && <Link src={data.github}>GitHub</Link>}
            </Text>
          )}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.subHeader}>Professional Summary</Text>
          <Text>{data.summary}</Text>
        </View>

        {/* Skills */}
        {data.skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Skills</Text>
            <View style={styles.list}>
              {data.skills.map((skill, index) => (
                <Text key={index} style={styles.text}>
                  • {skill}
                </Text>
              ))}
            </View>
          </View>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Experience</Text>
            {data.experience.map((exp, index) => (
              <View key={index} style={{ marginBottom: 8 }}>
                <View style={styles.twoColumn}>
                  <View style={styles.leftColumn}>
                    <Text>
                      {exp.role} | {exp.company}
                    </Text>
                  </View>
                  <View style={styles.rightColumn}>
                    <Text>{exp.duration}</Text>
                  </View>
                </View>
                <View style={styles.list}>
                  {exp.responsibilities?.map((item, i) => (
                    <Text key={i} style={styles.text}>
                      • {item}
                    </Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {data.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Education</Text>
            {data.education.map((edu, index) => (
              <Text key={index} style={styles.text}>
                {edu.degree} - {edu.institution} ({edu.year})
              </Text>
            ))}
          </View>
        )}

        {/* Projects */}
        {data.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Projects</Text>
            {data.projects.map((proj, index) => (
              <View key={index} style={{ marginBottom: 5 }}>
                <Text style={styles.text}>
                  {proj.title}: {proj.description}
                </Text>
                {proj.githubLink && <Link src={proj.githubLink}>GitHub</Link>}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
};

export default MyDocument;
