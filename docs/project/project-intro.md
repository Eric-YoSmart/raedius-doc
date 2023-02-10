---
sidebar_position: 1
---

# What is a "Project"？

**Project** is an abstract concept, which has different meanings in different application scenarios. For example, in the scenario of apartment water leak detection, we can create a root project named **Apartment Water Leak Detection**, Then create corresponding sub-projects. If our apartments are distributed in different areas (cities, regions), we can use the area as a second-level project, and the buildings in the area as third-level projects. Each room is regarded as a fourth-level project. In this example, assets are divided by region/location. Users can divide the project structure according to the actual needs of their own application.

In the example above, the user would end up creating the following project structure:


Apartment Water Leak Detection
├── Area A
│ └── Building 1
│     ├── Room 1001
│     └── Room 1002
├── Area B
│ ├── Building 1
│ ├── Building 2
│ └── Building 3
└── Area C
  ├── Building 1
  ├── Building 2
  └── Building 3

Most assets in Raedius are bound to projects

+ user
+ equipment
+ device group
+ alarm data
+ floor plan
+ Action Execution Configuration
+ audit log

## Item Limits

+ The project is a tree-like data structure, allowing the creation of a maximum of four levels, and each level allows the creation of a maximum of 9,000 sub-items.

## data permission

The account data access authority is the project currently associated with the account and all sub-projects below. Using the project structure of the above apartment as an example, if user A is currently bound to area A, then user 01 owns the data of area A and all sub-projects under its access permission.
