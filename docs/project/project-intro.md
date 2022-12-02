---
sidebar_position: 1
---

# What is a *Project?*

***Project*** is an abstract concept, which has different meanings in different application scenarios. For example, in the scenario of apartment water leakage detection, we can create a root project named Apartment Water Leakage Detection, and then create corresponding If our apartments are distributed in different areas (cities, regions), we can use the area as a second-level project, the building in the area as a third-level project, and each room in the building as a fourth-level project , this example is to divide assets by region/location, and users can divide the project structure according to the actual needs of their own business according to the actual usage scenarios.

In the example above, the user would end up creating the following project structure。

Apartment Water Leak Detection
├── A区
│   └── Building #1
│       ├── Room Number 1001
│       └── Room Number 1002
├── B区
│   ├── Building #1
│   ├── Building #2
│   └── Building #3
└── C区
    ├── Building #1
    ├── Building #3
    └── Building #3
```

Most assets in Raedius are bound to projects

+ user
+ equipment
+ device group
+ Alarm data
+ floor plans
+ Action Execution Configuration
+ audit log

## Project Limitations

+ A project is a folder tree-like data structure, allowing the creation of a maximum of four levels, and a maximum of 9,000 sub-items for each level.

## Data Permission

The account data access authority is the project currently associated with the account and all sub-projects below. Using the project structure of the above apartment as an example, if user A is currently bound to area A, then user A owns the data of area A and all sub-projects under its access permission.
