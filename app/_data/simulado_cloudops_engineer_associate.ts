import type { Simulado } from "@/types/simulado";

export const simuladoCloudOpsEngineerAssociate: Simulado = {
  slug: "cloudops-engineer-associate",
  title: "AWS Certified CloudOps Engineer – Associate",
  examCode: "SOA-C03",
  level: "associate",
  examQuestionCount: 65,
  examDurationMinutes: 130,
  passingScore: 72,
  questions: [
  {
    "id": "SOA-C03-1",
    "type": "single",
    "stem": "A CloudOps engineer is examining the following AWS CloudFormation template.",
    "ask": "Why will the stack creation fail?",
    "options": [
      {
        "id": "A",
        "text": "The Outputs section of the CloudFormation template was omitted."
      },
      {
        "id": "B",
        "text": "The Parameters section of the CloudFormation template was omitted."
      },
      {
        "id": "C",
        "text": "The PrivateDnsName cannot be set from a CloudFormation template."
      },
      {
        "id": "D",
        "text": "The VPC was not specified in the CloudFormation template."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-2",
    "type": "single",
    "stem": "A company applies user-defined tags to resources that are associated with the company's AWS workloads. Twenty days after applying the tags, the company notices that it cannot use the tags to filter views in the AWS Cost Explorer console.",
    "ask": "What is the reason for this issue?",
    "options": [
      {
        "id": "A",
        "text": "It takes at least 30 days to be able to use tags to filter views in Cost Explorer."
      },
      {
        "id": "B",
        "text": "The company has not activated the user-defined tags for cost allocation."
      },
      {
        "id": "C",
        "text": "The company has not created an AWS Cost and Usage Report."
      },
      {
        "id": "D",
        "text": "The company has not created a usage budget in AWS Budgets."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-3",
    "type": "single",
    "stem": "An environment consists of 100 Amazon EC2 Windows instances. The Amazon CloudWatch agent is deployed and running on all EC2 instances with a baseline configuration file to capture log files. There is a new requirement to capture the DHCP log files that exist on 50 of the instances.",
    "ask": "What is the MOST operationally efficient way to meet this new requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create an additional CloudWatch agent configuration file to capture the DHCP logs. Use the AWS Systems Manager Run Command to restart the CloudWatch agent on each EC2 instance with the append-config option to apply the additional configuration file."
      },
      {
        "id": "B",
        "text": "Log in to each EC2 instance with administrator rights. Create a PowerShell script to push the needed baseline log files and DHCP log files to CloudWatch."
      },
      {
        "id": "C",
        "text": "Run the CloudWatch agent configuration file wizard on each EC2 instance. Verify that the baseline log files are included and add the DHCP log files during the wizard creation process."
      },
      {
        "id": "D",
        "text": "Run the CloudWatch agent configuration file wizard on each EC2 instance and select the advanced detail level. This will capture the operating system log files."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-4",
    "type": "single",
    "stem": "A company is storing backups in an Amazon S3 bucket. The backups must not be deleted for at least 3 months after the backups are created.",
    "ask": "What should a CloudOps engineer do to meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Configure an IAM policy that denies the s3:DeleteObject action for all users. Three months after an object is written, remove the policy."
      },
      {
        "id": "B",
        "text": "Enable S3 Object Lock on a new S3 bucket in compliance mode. Place all backups in the new S3 bucket with a retention period of 3 months."
      },
      {
        "id": "C",
        "text": "Enable S3 Versioning on the existing S3 bucket. Configure S3 Lifecycle rules to protect the backups."
      },
      {
        "id": "D",
        "text": "Enable S3 Object Lock on a new S3 bucket in governance mode. Place all backups in the new S3 bucket with a retention period of 3 months."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-5",
    "type": "single",
    "stem": "A company's CloudOps engineer is troubleshooting communication between the components of an application. The company configured VPC flow logs to be published to Amazon CloudWatch Logs. However, there are no logs in CloudWatch Logs.",
    "ask": "What could be blocking the VPC flow logs from being published to CloudWatch Logs?",
    "options": [
      {
        "id": "A",
        "text": "The IAM policy that is attached to the IAM role for the flow log is missing the logs:CreateLogGroup permission."
      },
      {
        "id": "B",
        "text": "The IAM policy that is attached to the IAM role for the flow log is missing the logs:CreateExportTask permission."
      },
      {
        "id": "C",
        "text": "The VPC is configured for IPv6 addresses."
      },
      {
        "id": "D",
        "text": "The VPC is peered with another VPC in the AWS account."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-6",
    "type": "single",
    "stem": "A company is migrating a legacy application to AWS. The company manually installs and configures the legacy application on Amazon EC2 instances across multiple Availability Zones. The company sets up an Application Load Balancer (ALB) for the application. The company sets the target group routing algorithm to weighted random. The application requires session affinity. After the company deploys the application, users report random application errors that were not present in the legacy version of the application. The target group health checks do not show any failures. The company must resolve the application errors.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Set the routing algorithm of the target group to least outstanding requests."
      },
      {
        "id": "B",
        "text": "Turn on anomaly mitigation for the target group."
      },
      {
        "id": "C",
        "text": "Turn off the cross-zone load balancing attribute of the target group."
      },
      {
        "id": "D",
        "text": "Increase the deregistration delay attribute of the target group."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-7",
    "type": "single",
    "stem": "A company is using an Amazon Aurora MySQL DB cluster that has point-in-time recovery, backtracking, and automatic backup enabled. A CloudOps engineer needs to be able to roll back the DB cluster to a specific recovery point within the previous 72 hours. Restores must be completed in the same production DB cluster.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Aurora Replica. Promote the replica to replace the primary DB instance."
      },
      {
        "id": "B",
        "text": "Create an AWS Lambda function to restore an automatic backup to the existing DB cluster."
      },
      {
        "id": "C",
        "text": "Use backtracking to rewind the existing DB cluster to the desired recovery point."
      },
      {
        "id": "D",
        "text": "Use point-in-time recovery to restore the existing DB cluster to the desired recovery point."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-8",
    "type": "single",
    "stem": "A CloudOps engineer is troubleshooting an AWS CloudFormation stack creation that failed. Before the CloudOps engineer can identify the problem, the stack and its resources are deleted. For future deployments, the CloudOps engineer must preserve any resources that CloudFormation successfully created.",
    "ask": "What should the CloudOps engineer do to meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Set the value of the DisableRollback parameter to False during stack creation."
      },
      {
        "id": "B",
        "text": "Set the value of the OnFailure parameter to DO_NOTHING during stack creation."
      },
      {
        "id": "C",
        "text": "Specify a rollback configuration that has a rollback trigger of DO_NOTHING during stack creation."
      },
      {
        "id": "D",
        "text": "Set the value of the OnFailure parameter to ROLLBACK during stack creation."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-9",
    "type": "single",
    "stem": "A company plans to run a public web application on Amazon EC2 instances behind an Elastic Load Balancing (ELB) load balancer. The company's security team wants to protect the website by using AWS Certificate Manager (ACM) certificates. The load balancer must automatically redirect any HTTP requests to HTTPS.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Application Load Balancer that has one HTTPS listener on port 80. Attach an SSL/TLS certificate to listener port 80. Create a rule to redirect requests from HTTP to HTTPS."
      },
      {
        "id": "B",
        "text": "Create an Application Load Balancer that has one HTTP listener on port 80 and one HTTPS protocol listener on port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443."
      },
      {
        "id": "C",
        "text": "Create an Application Load Balancer that has two TCP listeners on port 80 and port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443."
      },
      {
        "id": "D",
        "text": "Create a Network Load Balancer that has two TCP listeners on port 80 and port 443. Attach an SSL/TLS certificate to listener port 443. Create a rule to redirect requests from port 80 to port 443."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-10",
    "type": "single",
    "stem": "A company uses AWS Organizations to manage a set of AWS accounts. The company has set up organizational units (OUs) in the organization. An application OU supports various applications. A CloudOps engineer must prevent users from launching Amazon EC2 instances that do not have a CostCenter-Project tag into any account in the application OU. The restriction must apply only to accounts in the application OU.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an IAM group that has a policy that allows the ec2:RunInstances action when the CostCenter-Project tag is present. Place all IAM users who need access to the application accounts in the IAM group."
      },
      {
        "id": "B",
        "text": "Create a service control policy (SCP) that denies the ec2:RunInstances action when the CostCenter-Project tag is missing. Attach the SCP to the application OU."
      },
      {
        "id": "C",
        "text": "Create an IAM role that has a policy that allows the ec2:RunInstances action when the CostCenter-Project tag is present. Attach the IAM role to the IAM users that are in the application OU accounts."
      },
      {
        "id": "D",
        "text": "Create a service control policy (SCP) that denies the ec2:RunInstances action when the CostCenter-Project tag is missing. Attach the SCP to the root OU."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-11",
    "type": "single",
    "stem": "A company runs a business application on more than 300 Linux-based instances. Each instance has the AWS Systems Manager Agent (SSM Agent) installed. The company expects the number of instances to grow in the future. All business application instances have the same user-defined tag. A CloudOps engineer wants to run a command on all the business application instances to download and install a package from a private repository. To avoid overwhelming the repository, the CloudOps engineer wants to ensure that no more than 30 downloads occur at one time.",
    "ask": "Which solution will meet this requirement in the MOST operationally efficient way?",
    "options": [
      {
        "id": "A",
        "text": "Use a secondary tag to create 10 batches of 30 instances each. Use a Systems Manager Run Command document to download and install the package. Specify the target as part of the Run Command document by using the secondary tag. Run each batch one time."
      },
      {
        "id": "B",
        "text": "Use an AWS Lambda function to automatically run a Systems Manager Run Command document that reads a list of instance IDs that have the user-defined tag. Set reserved concurrency for the Lambda function to 30."
      },
      {
        "id": "C",
        "text": "Use a Systems Manager Run Command document to download and install the package. Use rate control to set concurrency to 30. Specify the target by using the user-defined tag as part of the Run Command document."
      },
      {
        "id": "D",
        "text": "Use a parallel workflow state in AWS Step Functions to automatically run a Systems Manager Run Command document that reads a list of instance IDs that have the user-defined tag. Set the number of parallel states to 30. Run the Step Functions workflow 10 times."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-12",
    "type": "single",
    "stem": "A company uses Amazon Route 53 with latency-based routing across multiple AWS Regions to provide resiliency. The company uses Route 53 with latency-based routing to direct traffic to the nearest Region. Within each Region, weighted A records distribute traffic across multiple Availability Zones. During a recent update, some Availability Zone endpoints became unhealthy. Route 53 continued to route traffic to the unhealthy endpoints. The company must prevent this issue from occurring in the future.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Add a Route 53 health check for each of the weighted records that received traffic during the recent update."
      },
      {
        "id": "B",
        "text": "Increase the weight of Route 53 records in the Region where traffic must go during updates."
      },
      {
        "id": "C",
        "text": "Reconfigure all records to use latency-based routing across all Regions uniformly."
      },
      {
        "id": "D",
        "text": "Reduce the TTL value for latency-based routing to detect changes more quickly."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-13",
    "type": "multi",
    "pick": 2,
    "stem": "A company must ensure that all Amazon EC2 Windows instances that are launched in an AWS account have a third-party agent installed. The company uses AWS Systems Manager, and the Windows instances are tagged appropriately. The company must deploy periodic updates to the third-party agent when the updates become available.",
    "ask": "Which combination of steps will meet these requirements with the LEAST operational effort?",
    "options": [
      {
        "id": "A",
        "text": "Create a Systems Manager Distributor package for the third-party agent."
      },
      {
        "id": "B",
        "text": "Create a Systems Manager OpsItem that includes the tag value for Windows. Attach the Systems Manager inventory to the OpsItem."
      },
      {
        "id": "C",
        "text": "Create an AWS Lambda function. Program the Lambda function to log in to each instance and to install or update the third-party agent as needed."
      },
      {
        "id": "D",
        "text": "Create a Systems Manager State Manager association to run the AWS-RunRemoteScript document. Populate the details of the third-party agent package."
      },
      {
        "id": "E",
        "text": "Create a Systems Manager State Manager association to run the AWS-ConfigureAWSPackage document. Populate the details of the third-party agent package. Specify instance tags based on the appropriate tag value for Windows."
      }
    ],
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": "SOA-C03-14",
    "type": "single",
    "stem": "A company has deployed Amazon EC2 instances from custom Amazon Machine Images (AMIs) in two AWS Regions. The company registered all the instances with AWS Systems Manager. The company discovers that the operating system on some instances has a significant zero-day exploit. However, the company does not know how many instances are affected. A CloudOps engineer must implement a solution to deploy operating system patches for the affected EC2 instances.",
    "ask": "Which solution will meet this requirement with the LEAST operational overhead?",
    "options": [
      {
        "id": "A",
        "text": "Define a patch baseline in Systems Manager Patch Manager. Use a Patch Manager scan to identify the affected instances. Use the Patch Now option in each Region to update the affected instances."
      },
      {
        "id": "B",
        "text": "Use AWS Config to identify the affected instances. Define a patch baseline in Systems Manager Patch Manager. Use the Patch Now option in Patch Manager to update the affected instances."
      },
      {
        "id": "C",
        "text": "Create an Amazon EventBridge rule to react to Systems Manager Compliance events. Configure the EventBridge rule to run a patch baseline on the affected instances."
      },
      {
        "id": "D",
        "text": "Use AWS Config to identify the affected instances. Update the existing EC2 AMIs with the desired patch. Manually launch instances from the new AMIs to replace the affected instances in both Regions."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-15",
    "type": "single",
    "stem": "A company hosts an FTP server on Amazon EC2 instances. In the company's AWS environment, AWS Security Hub sends findings for the EC2 instances to Amazon EventBridge because the FTP port has become publicly exposed in the security groups that are attached to the instances. A CloudOps engineer wants an automated solution to remediate the Security Hub finding and any similar exposed port findings. The CloudOps engineer wants to use an event-driven approach.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Configure the existing EventBridge event to stop the EC2 instances that have the exposed port."
      },
      {
        "id": "B",
        "text": "Create a cron job for the FTP server to invoke an AWS Lambda function. Configure the Lambda function to modify the security group of the identified EC2 instances and to remove the instances that allow public access."
      },
      {
        "id": "C",
        "text": "Create a cron job for the FTP server that invokes an AWS Lambda function. Configure the Lambda function to modify the server to use SFTP instead of FTP."
      },
      {
        "id": "D",
        "text": "Configure the existing EventBridge event to invoke an AWS Lambda function. Configure the function to remove the security group rule that allows public access."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-16",
    "type": "single",
    "stem": "A company plans to migrate several of its high performance computing (HPC) virtual machines (VMs) to Amazon EC2 instances on AWS. A CloudOps engineer must identify a placement group for this deployment. The strategy must minimize network latency and must maximize network throughput between the HPC VMs.",
    "ask": "Which strategy should the CloudOps engineer choose to meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Deploy the instances in a cluster placement group in one Availability Zone."
      },
      {
        "id": "B",
        "text": "Deploy the instances in a partition placement group in two Availability Zones."
      },
      {
        "id": "C",
        "text": "Deploy the instances in a partition placement group in one Availability Zone."
      },
      {
        "id": "D",
        "text": "Deploy the instances in a spread placement group in two Availability Zones."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-17",
    "type": "single",
    "stem": "A company manages a set of accounts on AWS by using AWS Organizations. The company's security team wants to use a native AWS service to regularly scan all AWS accounts against the Center for Internet Security (CIS) AWS Foundations Benchmark.",
    "ask": "What is the MOST operationally efficient way to meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Designate a central security account as the AWS Security Hub administrator account. Create a script that sends an invitation from the Security Hub administrator account and accepts the invitation from the member account. Run the script every time a new account is created. Configure Security Hub to run the CIS AWS Foundations Benchmark scans."
      },
      {
        "id": "B",
        "text": "Run the CIS AWS Foundations Benchmark across all accounts by using Amazon Inspector."
      },
      {
        "id": "C",
        "text": "Designate a central security account as the Amazon GuardDuty administrator account. Create a script that sends an invitation from the GuardDuty administrator account and accepts the invitation from the member account. Run the script every time a new account is created. Configure GuardDuty to run the CIS AWS Foundations Benchmark scans."
      },
      {
        "id": "D",
        "text": "Designate an AWS Security Hub administrator account. Configure new accounts in the organization to automatically become member accounts. Enable CIS AWS Foundations Benchmark scans."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-18",
    "type": "single",
    "stem": "A company has users that deploy Amazon EC2 instances that have more volume performance capacity than is required. A CloudOps engineer needs to review all Amazon Elastic Block Store (Amazon EBS) volumes that are associated with the instances and create cost optimization recommendations based on IOPS and throughput.",
    "ask": "What should the CloudOps engineer do to meet these requirements in the MOST operationally efficient way?",
    "options": [
      {
        "id": "A",
        "text": "Use the monitoring graphs in the EC2 console to view metrics for EBS volumes. Review the consumed space against the provisioned space on each volume. Identify any volumes that have low utilization."
      },
      {
        "id": "B",
        "text": "Stop the EC2 instances from the EC2 console. Change the EC2 instance type to Amazon EBS-optimized. Start the EC2 instances."
      },
      {
        "id": "C",
        "text": "Opt in to AWS Compute Optimizer. Allow sufficient time for metrics to be gathered. Review the Compute Optimizer findings for EBS volumes."
      },
      {
        "id": "D",
        "text": "Install the fio tool onto the EC2 instances and create a .cfg file to approximate the required workloads. Use the benchmark results to gauge whether the provisioned EBS volumes are of the most appropriate type."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-19",
    "type": "single",
    "stem": "A CloudOps engineer must ensure that all of a company's current and future Amazon S3 buckets have logging enabled. If an S3 bucket does not have logging enabled, an automated process must enable logging for the S3 bucket.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Use AWS Trusted Advisor to perform a check for S3 buckets that do not have logging enabled. Configure the check to enable logging for S3 buckets that do not have logging enabled."
      },
      {
        "id": "B",
        "text": "Configure an S3 bucket policy that requires all current and future S3 buckets to have logging enabled."
      },
      {
        "id": "C",
        "text": "Use the s3-bucket-logging-enabled AWS Config managed rule. Add a remediation action that uses an AWS Lambda function to enable logging."
      },
      {
        "id": "D",
        "text": "Use the s3-bucket-logging-enabled AWS Config managed rule. Add a remediation action that uses the AWS-ConfigureS3BucketLogging AWS Systems Manager Automation runbook to enable logging."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-20",
    "type": "single",
    "stem": "A company has millions of subscribers. The company's marketing department wants to automate a process that sends notifications to subscribers every Saturday. The company already has a mechanism that uses Amazon Simple Notification Service (Amazon SNS) to send notifications to subscribers. However, the company has historically sent notifications to subscribers manually. A CloudOps engineer needs a solution to automatically send notifications on a schedule.",
    "ask": "Which solution will meet these requirements in the MOST operationally efficient way?",
    "options": [
      {
        "id": "A",
        "text": "Launch a new Amazon EC2 instance. Configure a cron job to use the AWS SDK to send an SNS notification to subscribers every Saturday."
      },
      {
        "id": "B",
        "text": "Create a rule in Amazon EventBridge that triggers every Saturday. Configure the rule to publish a notification to an SNS topic."
      },
      {
        "id": "C",
        "text": "Create an SNS subscription to a message fanout that sends notifications to subscribers every Saturday."
      },
      {
        "id": "D",
        "text": "Use the AWS Step Functions scheduling feature to run a Step Functions step every Saturday. Configure the step to publish a message to an SNS topic."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-21",
    "type": "single",
    "stem": "A CloudOps engineer is responsible for a company's disaster recovery procedures. The company has a source Amazon S3 bucket in a production account, and it wants to replicate objects from the source to a destination S3 bucket in a nonproduction account. The CloudOps engineer configures S3 cross-Region, cross-account replication to copy the source S3 bucket to the destination S3 bucket. When the CloudOps engineer attempts to access objects in the destination S3 bucket, they receive an Access Denied error.",
    "ask": "Which solution will resolve this problem?",
    "options": [
      {
        "id": "A",
        "text": "Modify the replication configuration to change object ownership to the destination S3 bucket owner."
      },
      {
        "id": "B",
        "text": "Ensure that the replication rule applies to all objects in the source S3 bucket and is not scoped to a single prefix."
      },
      {
        "id": "C",
        "text": "Retry the request when the S3 Replication Time Control (S3 RTC) has elapsed."
      },
      {
        "id": "D",
        "text": "Verify that the storage class for the replicated objects did not change between the source S3 bucket and the destination S3 bucket."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-22",
    "type": "single",
    "stem": "An Amazon EC2 instance is running an application that uses Amazon Simple Queue Service (Amazon SQS) queues. A CloudOps engineer must ensure that the application can read, write, and delete messages from the SQS queues.",
    "ask": "Which solution will meet these requirements in the MOST secure manner?",
    "options": [
      {
        "id": "A",
        "text": "Create an IAM user with an IAM policy that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues. Embed the IAM user's credentials in the application's configuration."
      },
      {
        "id": "B",
        "text": "Create an IAM user with an IAM policy that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues. Export the IAM user's access key and secret access key as environment variables on the EC2 instance."
      },
      {
        "id": "C",
        "text": "Create and associate an IAM role that allows EC2 instances to call AWS services. Attach an IAM policy to the role that allows sqs:* permissions to the appropriate queues."
      },
      {
        "id": "D",
        "text": "Create and associate an IAM role that allows EC2 instances to call AWS services. Attach an IAM policy to the role that allows the sqs:SendMessage permission, the sqs:ReceiveMessage permission, and the sqs:DeleteMessage permission to the appropriate queues."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-23",
    "type": "single",
    "stem": "A CloudOps engineer is designing a solution for an Amazon RDS for PostgreSQL DB instance. Database credentials must be stored and rotated monthly. The applications that connect to the DB instance send write-intensive traffic with variable client connections that sometimes increase significantly in a short period of time.",
    "ask": "Which solution should a CloudOps engineer choose to meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Configure AWS Key Management Service (AWS KMS) to automatically rotate the keys for the DB instance. Use RDS Proxy to handle the increases in database connections."
      },
      {
        "id": "B",
        "text": "Configure AWS Key Management Service (AWS KMS) to automatically rotate the keys for the DB instance. Use RDS read replicas to handle the increases in database connections."
      },
      {
        "id": "C",
        "text": "Configure AWS Secrets Manager to automatically rotate the credentials for the DB instance. Use RDS Proxy to handle the increases in database connections."
      },
      {
        "id": "D",
        "text": "Configure AWS Secrets Manager to automatically rotate the credentials for the DB instance. Use RDS read replicas to handle the increases in database connections."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-24",
    "type": "single",
    "stem": "A company operates compute resources in a VPC and in the company's on-premises data center. The company already has an AWS Direct Connect connection between the VPC and the on-premises data center. A CloudOps engineer needs to ensure that Amazon EC2 instances in the VPC can resolve DNS names for hosts in the on-premises data center.",
    "ask": "Which solution will meet this requirement with the LEAST amount of ongoing maintenance?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon Route 53 private hosted zone. Populate the zone with the hostnames and IP addresses of the hosts in the on-premises data center."
      },
      {
        "id": "B",
        "text": "Create an Amazon Route 53 Resolver outbound endpoint. Add the IP addresses of an on-premises DNS server for the domain names that need to be forwarded."
      },
      {
        "id": "C",
        "text": "Set up a forwarding rule for reverse DNS queries in Amazon Route 53 Resolver. Set the enableDnsHostnames attribute to true for the VPC."
      },
      {
        "id": "D",
        "text": "Add the hostnames and IP addresses for the on-premises hosts to the /etc/hosts file of each EC2 instance."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-25",
    "type": "single",
    "stem": "A company hosts a web application on an Amazon EC2 instance. The web server logs are published to Amazon CloudWatch Logs. The log events have the same structure and include the HTTP response codes that are associated with the user requests. The company needs to monitor the number of times that the web server returns an HTTP 404 response.",
    "ask": "What is the MOST operationally efficient solution that meets these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create a CloudWatch Logs metric filter that counts the number of times that the web server returns an HTTP 404 response."
      },
      {
        "id": "B",
        "text": "Create a CloudWatch Logs subscription filter that counts the number of times that the web server returns an HTTP 404 response."
      },
      {
        "id": "C",
        "text": "Create an AWS Lambda function that runs a CloudWatch Logs Insights query that counts the number of 404 codes in the log events during the past hour."
      },
      {
        "id": "D",
        "text": "Create a script that runs a CloudWatch Logs Insights query that counts the number of 404 codes in the log events during the past hour."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-26",
    "type": "single",
    "stem": "A company has an internal web application that runs on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group in a single Availability Zone. A CloudOps engineer must make the application highly available.",
    "ask": "Which action should the CloudOps engineer take to meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Increase the maximum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage."
      },
      {
        "id": "B",
        "text": "Increase the minimum number of instances in the Auto Scaling group to meet the capacity that is required at peak usage."
      },
      {
        "id": "C",
        "text": "Update the Auto Scaling group to launch new instances in a second Availability Zone in the same AWS Region."
      },
      {
        "id": "D",
        "text": "Update the Auto Scaling group to launch new instances in an Availability Zone in a second AWS Region."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-27",
    "type": "single",
    "stem": "A CloudOps engineer is creating a simple, public-facing website running on Amazon EC2. The CloudOps engineer created the EC2 instance in an existing public subnet and assigned an Elastic IP address to the instance. Next, the CloudOps engineer created and applied a new security group to the instance to allow incoming HTTP traffic from 0.0.0.0/0. Finally, the CloudOps engineer created a new network ACL and applied it to the subnet to allow incoming HTTP traffic from 0.0.0.0/0. However, the website cannot be reached from the internet.",
    "ask": "What is the cause of this issue?",
    "options": [
      {
        "id": "A",
        "text": "The CloudOps engineer did not create an outbound rule that allows ephemeral port return traffic in the new network ACL."
      },
      {
        "id": "B",
        "text": "The CloudOps engineer did not create an outbound rule in the security group that allows HTTP traffic from port 80."
      },
      {
        "id": "C",
        "text": "The Elastic IP address assigned to the EC2 instance has changed."
      },
      {
        "id": "D",
        "text": "There is an additional network ACL associated with the subnet that includes a rule that denies inbound HTTP traffic from port 80."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-28",
    "type": "single",
    "stem": "A company wants to use AWS Systems Manager to manage a large fleet of Amazon EC2 instances. The company hosts the instances in private subnets. The company follows the principle of least privilege to assign access permissions. All private subnets have internet connectivity through a NAT gateway. A CloudOps engineer installs the latest version of the Systems Manager Agent (SSM Agent). However, the EC2 instances do not appear in Systems Manager Fleet Manager. The CloudOps engineer must resolve this issue.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Replace the NAT gateway with a NAT instance that is deployed in the public subnet. Update the private subnet's route table to use the NAT instance."
      },
      {
        "id": "B",
        "text": "Create a VPC endpoint for Systems Manager. Remove routes to the internet through the NAT gateway from the private subnet's route table."
      },
      {
        "id": "C",
        "text": "Attach the AmazonSSMManagedInstanceCore AWS managed policy to the EC2 instance profile that is associated with the instances."
      },
      {
        "id": "D",
        "text": "Attach a custom policy that allows all actions to ssm* to the EC2 instance profile that is associated with the instances."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-29",
    "type": "single",
    "stem": "A company has an application that collects notifications from thousands of alarm systems. The notifications include alarm notifications and information notifications. The information notifications include the system arming processes, disarming processes, and sensor status. All notifications are kept as messages in an Amazon Simple Queue Service (Amazon SQS) queue. Amazon EC2 instances that are in an Auto Scaling group process the messages. A CloudOps engineer needs to implement a solution that prioritizes alarm notifications over information notifications.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Adjust the Auto Scaling group to scale faster when a high number of messages is in the queue."
      },
      {
        "id": "B",
        "text": "Use the Amazon Simple Notification Service (Amazon SNS) fanout feature with Amazon SQS to send the notifications in parallel to all the EC2 instances."
      },
      {
        "id": "C",
        "text": "Add an Amazon DynamoDB stream to accelerate the message processing."
      },
      {
        "id": "D",
        "text": "Create a queue for alarm notifications and a queue for information notifications. Update the application to collect messages from the alarm notifications queue first."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-30",
    "type": "single",
    "stem": "A company is implementing security and compliance by using AWS Trusted Advisor. The company's CloudOps team is validating the list of Trusted Advisor checks that it can access.",
    "ask": "Which factor will affect the quantity of available Trusted Advisor checks?",
    "options": [
      {
        "id": "A",
        "text": "Whether at least one Amazon EC2 instance is in the running state"
      },
      {
        "id": "B",
        "text": "The AWS Support plan"
      },
      {
        "id": "C",
        "text": "An AWS Organizations service control policy (SCP)"
      },
      {
        "id": "D",
        "text": "Whether the AWS account root user has multi-factor authentication (MFA) enabled"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-31",
    "type": "single",
    "stem": "A CloudOps engineer has successfully deployed a VPC with an AWS CloudFormation template. The CloudOps engineer wants to deploy the same template across multiple accounts that are managed through AWS Organizations.",
    "ask": "Which solution will meet this requirement with the LEAST operational overhead?",
    "options": [
      {
        "id": "A",
        "text": "Assume the OrganizationAccountAccessRole IAM role from the management account. Deploy the template in each of the accounts."
      },
      {
        "id": "B",
        "text": "Create an AWS Lambda function to assume a role in each account. Deploy the template by using the AWS CloudFormation CreateStack API call."
      },
      {
        "id": "C",
        "text": "Create an AWS Lambda function to query for a list of accounts. Deploy the template by using the AWS CloudFormation CreateStack API call."
      },
      {
        "id": "D",
        "text": "Use AWS CloudFormation StackSets from the management account to deploy the template in each of the accounts."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-32",
    "type": "single",
    "stem": "A company's application is hosted by an internet provider at app.example.com. The company wants to access the application by using www.company.com, which the company owns and manages with Amazon Route 53.",
    "ask": "Which Route 53 record should be created to address this?",
    "options": [
      {
        "id": "A",
        "text": "A record"
      },
      {
        "id": "B",
        "text": "Alias record"
      },
      {
        "id": "C",
        "text": "CNAME record"
      },
      {
        "id": "D",
        "text": "Pointer (PTR) record"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-33",
    "type": "single",
    "stem": "A company uses Amazon ElastiCache (Redis OSS) to cache application data. A CloudOps engineer must implement a solution to increase the resilience of the cache. The solution also must minimize the recovery time objective (RTO).",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Replace ElastiCache (Redis OSS) with ElastiCache (Memcached)."
      },
      {
        "id": "B",
        "text": "Create an Amazon EventBridge rule to initiate a backup every hour. Restore the backup when necessary."
      },
      {
        "id": "C",
        "text": "Create a read replica in a second Availability Zone. Enable Multi-AZ for the ElastiCache (Redis OSS) replication group."
      },
      {
        "id": "D",
        "text": "Enable automatic backups. Restore the backups when necessary."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-34",
    "type": "single",
    "stem": "A company has multiple AWS accounts. A CloudOps engineer uses a sandbox account to create and verify IAM policies for use in a production account. The CloudOps engineer uses AWS CloudFormation to deploy policies to the sandbox account for testing. When tests pass, the CloudOps engineer deploys the policies to production. The CloudOps engineer has configured AWS CloudTrail in both the sandbox account and the production account. The CloudOps engineer wants to detect any changes to the IAM policies after the policies have been deployed by CloudFormation. The CloudOps engineer must receive notifications for any changes to the policies.",
    "ask": "Which solution will meet these requirements with the LEAST administrative effort?",
    "options": [
      {
        "id": "A",
        "text": "Configure CloudTrail to send email notifications to the CloudOps engineer when CloudTrail detects changes to the IAM policies."
      },
      {
        "id": "B",
        "text": "Create an Amazon EventBridge rule to invoke an AWS Lambda function to check the CloudFormation stack for drift. Configure the function to use Amazon Simple Notification Service (Amazon SNS) to notify the CloudOps engineer if the function detects any drift."
      },
      {
        "id": "C",
        "text": "Use AWS Identity and Access Management Access Analyzer to generate a policy based on CloudTrail activity for the IAM role that is attached to the IAM policies in the production account. Compare the results to the IAM policies that are in the sandbox account. Send a notification to the CloudOps engineer if the policies are different."
      },
      {
        "id": "D",
        "text": "Store the IAM policies as a JSON document in an Amazon S3 bucket. Use an AWS Lambda function to periodically compare the IAM policies with the JSON document that is stored in the S3 bucket."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-35",
    "type": "single",
    "stem": "A finance company stores confidential data in an Amazon S3 bucket. The company uses Amazon QuickSight to analyze the data and create dashboard reports. The company requires that all data access and connections to QuickSight remain within the company's VPC network boundary.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an interface VPC endpoint for QuickSight. Configure the endpoint to connect to QuickSight within the VPC by using AWS PrivateLink. Create a manifest file that points to the S3 data. Grant QuickSight permission to access the S3 bucket."
      },
      {
        "id": "B",
        "text": "Set up a VPC endpoint for QuickSight. Use an Amazon EC2 instance as a proxy to establish a direct connection between the VPC and QuickSight. Create a manifest file that points to the S3 data. Store the manifest on the EC2 instance. Grant QuickSight permission to access the EC2 instance."
      },
      {
        "id": "C",
        "text": "Configure an Amazon S3 VPC gateway endpoint. Route all data from QuickSight through the endpoint to transfer data. Grant QuickSight permission to access the S3 bucket."
      },
      {
        "id": "D",
        "text": "Configure a NAT gateway in the company's VPC. Route all data from QuickSight through the NAT gateway to transfer data. Grant QuickSight permission to access the S3 bucket."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-36",
    "type": "single",
    "stem": "A company is migrating its production file server to AWS. All data that is stored on the file server must remain accessible if an Availability Zone becomes unavailable or when system maintenance is performed. Users must be able to interact with the file server through the SMB protocol. Users also must have the ability to manage file permissions by using Windows ACLs.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create a single AWS Storage Gateway file gateway."
      },
      {
        "id": "B",
        "text": "Create an Amazon FSx for Windows File Server Multi-AZ file system."
      },
      {
        "id": "C",
        "text": "Deploy two AWS Storage Gateway file gateways across two Availability Zones. Configure an Application Load Balancer in front of the file gateways."
      },
      {
        "id": "D",
        "text": "Deploy two Amazon FSx for Windows File Server Single-AZ 2 file systems. Configure Microsoft Distributed File System Replication (DFSR)."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-37",
    "type": "single",
    "stem": "A company has a web application that is experiencing performance problems many times each night. A root cause analysis reveals sudden increases in CPU utilization that last 5 minutes on an Amazon EC2 Linux instance. A CloudOps engineer must find the process ID (PID) of the service or process that is consuming more CPU.",
    "ask": "What should the CloudOps engineer do to collect the process utilization information with the LEAST amount of effort?",
    "options": [
      {
        "id": "A",
        "text": "Configure the Amazon CloudWatch agent procstat plugin to capture CPU process metrics."
      },
      {
        "id": "B",
        "text": "Configure an AWS Lambda function to run every minute to capture the PID and send a notification."
      },
      {
        "id": "C",
        "text": "Log in to the EC2 instance by using a .pem key each night. Then run the top command."
      },
      {
        "id": "D",
        "text": "Use the default Amazon CloudWatch CPU utilization metric to capture the PID in CloudWatch."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-38",
    "type": "single",
    "stem": "A company needs to monitor its website's availability to end users. The company needs a solution to provide an Amazon Simple Notification Service (Amazon SNS) notification if the website's uptime decreases to less than 99%. The monitoring must provide an accurate view of the user experience on the website.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon CloudWatch alarm that is based on the website's logs that are published to a CloudWatch Logs log group. Configure the alarm to publish an SNS notification if the number of HTTP 4xx errors and 5xx errors exceeds a specified threshold."
      },
      {
        "id": "B",
        "text": "Create an Amazon CloudWatch alarm that is based on the website's published metrics in CloudWatch. Configure the alarm to publish an SNS notification that is based on anomaly detection."
      },
      {
        "id": "C",
        "text": "Create an Amazon CloudWatch Synthetics heartbeat monitoring canary. Associate the canary with the website's URL for end users. Create a CloudWatch alarm for the canary. Configure the alarm to publish an SNS notification if the value of the SuccessPercent metric is less than 99%."
      },
      {
        "id": "D",
        "text": "Create an Amazon CloudWatch Synthetics broken link checker monitoring canary. Associate the canary with the website's URL for end users. Create a CloudWatch alarm for the canary. Configure the alarm to publish an SNS notification if the value of the SuccessPercent metric is less than 99%."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-39",
    "type": "single",
    "stem": "A company uses Amazon EC2 Auto Scaling across multiple Availability Zones. The company must ensure that EC2 instances are provisioned in private subnets. The company recently optimized its cloud infrastructure by reducing the number of NAT gateways in the company's VPC to one. Some EC2 instances lost internet connectivity after the infrastructure update. A CloudOps engineer must resolve the connectivity issue.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Replace the existing NAT gateway with a NAT instance in the same subnet."
      },
      {
        "id": "B",
        "text": "Update VPC route tables to target the existing NAT gateway for internet traffic."
      },
      {
        "id": "C",
        "text": "Update VPC route tables to target an internet gateway for internet traffic."
      },
      {
        "id": "D",
        "text": "Add secondary IP addresses to the existing NAT gateway."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-40",
    "type": "single",
    "stem": "A company uses AWS CloudFormation to manage a stack of Amazon EC2 instances on AWS. A CloudOps engineer needs to keep the instances and all of the instances' data, even if someone deletes the stack.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Set the DeletionPolicy attribute to Snapshot for the EC2 instance resource in the CloudFormation template."
      },
      {
        "id": "B",
        "text": "Automate backups by using Amazon Data Lifecycle Manager (Amazon DLM)."
      },
      {
        "id": "C",
        "text": "Create a backup plan in AWS Backup."
      },
      {
        "id": "D",
        "text": "Set the DeletionPolicy attribute to Retain for the EC2 instance resource in the CloudFormation template."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-41",
    "type": "single",
    "stem": "A CloudOps engineer is preparing to deploy an application to Amazon EC2 instances that are in an Auto Scaling group. The application requires dependencies to be installed. Application updates are issued weekly. The CloudOps engineer needs to implement a solution to incorporate the application updates on a regular basis. The solution also must conduct a vulnerability scan during Amazon Machine Image (AMI) creation.",
    "ask": "What is the MOST operationally efficient solution that meets these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create a script that uses Packer. Schedule a cron job to run the script."
      },
      {
        "id": "B",
        "text": "Install the application and its dependencies on an EC2 instance. Create an AMI of the EC2 instance."
      },
      {
        "id": "C",
        "text": "Use EC2 Image Builder with a custom recipe to install the application and its dependencies."
      },
      {
        "id": "D",
        "text": "Invoke the EC2 CreateImage API operation by using an Amazon EventBridge scheduled rule."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-42",
    "type": "single",
    "stem": "A company is planning to host an application on a set of Amazon EC2 instances that are distributed across multiple Availability Zones. The application must be able to scale to millions of requests each second. A CloudOps engineer must design a solution to distribute the traffic to the EC2 instances. The solution must be optimized to handle sudden and volatile traffic patterns while using a single static IP address for each Availability Zone.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Amazon Simple Queue Service (Amazon SQS) queue"
      },
      {
        "id": "B",
        "text": "Application Load Balancer"
      },
      {
        "id": "C",
        "text": "AWS Global Accelerator"
      },
      {
        "id": "D",
        "text": "Network Load Balancer"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-43",
    "type": "multi",
    "pick": 2,
    "stem": "A company has a stateful web application that is hosted on Amazon EC2 instances in an Auto Scaling group. The instances run behind an Application Load Balancer (ALB) that has a single target group. The ALB is configured as the origin in an Amazon CloudFront distribution. Users are reporting random logouts from the web application.",
    "ask": "Which combination of actions should a CloudOps engineer take to resolve this problem?",
    "options": [
      {
        "id": "A",
        "text": "Change to the least outstanding requests algorithm on the ALB target group."
      },
      {
        "id": "B",
        "text": "Configure cookie forwarding in the CloudFront distribution cache behavior."
      },
      {
        "id": "C",
        "text": "Configure header forwarding in the CloudFront distribution cache behavior."
      },
      {
        "id": "D",
        "text": "Enable group-level stickiness on the ALB listener rule."
      },
      {
        "id": "E",
        "text": "Enable sticky sessions on the ALB target group."
      }
    ],
    "answer": [
      "B",
      "E"
    ]
  },
  {
    "id": "SOA-C03-44",
    "type": "single",
    "stem": "A global company uses an organization in AWS Organizations to manage multiple AWS accounts. To comply with regulations, the company deploys workload environments to five AWS Regions. The company has a separate AWS account for each Region. The company needs to connect every environment's VPC to a central shared VPC that serves as a directory and to a shared monitoring VPC. The shared accounts are each in separate AWS accounts.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create a transit gateway in the central shared AWS account. Share the transit gateway with the company's AWS accounts. Connect all VPCs to the central transit gateway."
      },
      {
        "id": "B",
        "text": "Create a separate transit gateway in every Region where the company has deployed resources. Share the transit gateways with company's AWS accounts. Connect the VPC in each Region to the transit gateway that is in the same Region. Peer the transit gateways. Create appropriate routes in all route tables."
      },
      {
        "id": "C",
        "text": "Create a virtual private gateway for the shared VPCs. Create a customer gateway for the workload VPCs. Configure an AWS Site-to-Site VPN connection between the directory VPC, the monitoring VPC, and every workload VPC."
      },
      {
        "id": "D",
        "text": "Create VPC peering connections between the central shared VPC, the shared monitoring VPC, and every workload VPC."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-45",
    "type": "multi",
    "pick": 2,
    "stem": "A company stores critical information in an Amazon RDS for PostgreSQL database. The company notices degraded performance, high CPU utilization, increased query latency, and connection timeouts during peak shopping hours. The company also identifies surges in user connections during peak hours. The connection surges affect the read performance of the database. The company wants to resolve the database performance issues.",
    "ask": "Which combination of steps will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Use Amazon RDS Performance Insights to analyze the SQL queries that most affect database performance. Update the SQL queries based on the analysis findings."
      },
      {
        "id": "B",
        "text": "Use Amazon CloudWatch Logs Insights to analyze the database queries and identify performance bottlenecks. Update the queries based on the analysis findings."
      },
      {
        "id": "C",
        "text": "Use Amazon RDS for PostgreSQL with a single Availability Zone."
      },
      {
        "id": "D",
        "text": "Disable connection pooling entirely to ensure that all user connections are treated equally, even during peak hours."
      },
      {
        "id": "E",
        "text": "Implement RDS Proxy with connection pooling."
      }
    ],
    "answer": [
      "A",
      "E"
    ]
  },
  {
    "id": "SOA-C03-46",
    "type": "single",
    "stem": "A company runs a web application on three Amazon EC2 instances behind an Application Load Balancer (ALB). The company notices that random periods of increased traffic cause a degradation in the application's performance. A CloudOps engineer must scale the application to meet the increased traffic.",
    "ask": "Which solution meets these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon CloudWatch alarm to monitor application latency and increase the size of each EC2 instance if the desired threshold is reached."
      },
      {
        "id": "B",
        "text": "Create an Amazon EventBridge rule to monitor application latency and add an EC2 instance to the ALB if the desired threshold is reached."
      },
      {
        "id": "C",
        "text": "Deploy the application to an Auto Scaling group of EC2 instances with a target tracking scaling policy. Attach the ALB to the Auto Scaling group."
      },
      {
        "id": "D",
        "text": "Deploy the application to an Auto Scaling group of EC2 instances with a scheduled scaling policy. Attach the ALB to the Auto Scaling group."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-47",
    "type": "single",
    "stem": "A company's reporting job that used to run in 15 minutes is now taking an hour to run. An application generates the reports. The application runs on Amazon EC2 instances and extracts data from an Amazon RDS for MySQL database. A CloudOps engineer checks the Amazon CloudWatch dashboard for the RDS instance and notices that the Read IOPS metrics are high, even when the reports are not running. The CloudOps engineer needs to improve the performance and the availability of the RDS instance.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Configure an Amazon ElastiCache cluster in front of the RDS instance. Update the reporting job to query the ElastiCache cluster."
      },
      {
        "id": "B",
        "text": "Deploy an RDS read replica. Update the reporting job to query the reader endpoint."
      },
      {
        "id": "C",
        "text": "Create an Amazon CloudFront distribution. Set the RDS instance as the origin. Update the reporting job to query the CloudFront distribution."
      },
      {
        "id": "D",
        "text": "Increase the size of the RDS instance."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-48",
    "type": "single",
    "stem": "A company that runs multiple workloads on AWS wants to enhance its security posture by implementing DNS-based threat protection. The company must block DNS-based attacks.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Deploy AWS Shield Advanced to filter and block malicious DNS queries. Set up domain filtering policies."
      },
      {
        "id": "B",
        "text": "Use AWS WAF to inspect DNS traffic for malicious domains. Create custom rules to block known threats."
      },
      {
        "id": "C",
        "text": "Configure Amazon Route 53 Resolver to forward DNS queries to Route 53 Resolver DNS Firewall Advanced to detect and filter threats."
      },
      {
        "id": "D",
        "text": "Configure AWS Config to monitor DNS queries and DNS traffic patterns. Use an AWS Lambda function to prevent access to malicious domains."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-49",
    "type": "single",
    "stem": "A CloudOps engineer wants to share a copy of a production database with a migration account. The production database is hosted on an Amazon RDS DB instance and is encrypted at rest with an AWS Key Management Service (AWS KMS) key that has an alias of production-rds-key.",
    "ask": "What must the CloudOps engineer do to meet these requirements with the LEAST administrative overhead?",
    "options": [
      {
        "id": "A",
        "text": "Take a snapshot of the RDS DB instance in the production account. Amend the KMS key policy of the production-rds-key KMS key to give access to the migration account's root user. Share the snapshot with the migration account."
      },
      {
        "id": "B",
        "text": "Create an RDS read replica in the migration account. Configure the KMS key policy to replicate the production-rds-key KMS key to the migration account."
      },
      {
        "id": "C",
        "text": "Take a snapshot of the RDS DB instance in the production account. Share the snapshot with the migration account. In the migration account, create a new KMS key that has an identical alias."
      },
      {
        "id": "D",
        "text": "Use native database toolsets to export the RDS DB instance to Amazon S3. Create an S3 bucket and an S3 bucket policy for cross-account access between the production account and the migration account. Use native database toolsets to import the database from Amazon S3 to a new RDS DB instance."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-50",
    "type": "single",
    "stem": "A company has a critical serverless application that uses multiple AWS Lambda functions. Each Lambda function generates 1 GB of log data daily in its own Amazon CloudWatch Logs log group. The company's security team asks for a count of application errors, grouped by type, across all of the log groups.",
    "ask": "What should a CloudOps engineer do to meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Perform a CloudWatch Logs Insights query that uses the stats command and count function."
      },
      {
        "id": "B",
        "text": "Perform a CloudWatch Logs search that uses the groupby keyword and count function."
      },
      {
        "id": "C",
        "text": "Perform an Amazon Athena query that uses the SELECT and GROUP BY keywords."
      },
      {
        "id": "D",
        "text": "Perform an Amazon RDS query that uses the SELECT and GROUP BY keywords."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-51",
    "type": "single",
    "stem": "A developer uses an Amazon Linux Amazon Machine Image (AMI) to launch an EC2 instance that hosts a third-party application. The application occasionally becomes unstable. The CloudOps engineer needs a solution to automatically reboot the EC2 instance whenever utilization is above 90% for 15 minutes and to notify the developer about the reboot.",
    "ask": "Which solution will meet these requirements with the LEAST administrative effort?",
    "options": [
      {
        "id": "A",
        "text": "Configure an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance. Configure the alarm to invoke an AWS Lambda function to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the CloudWatch alarm activates. Configure the Lambda function to reboot the EC2 instance. Subscribe the developer to the SNS topic."
      },
      {
        "id": "B",
        "text": "Create an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance. Configure the alarm to publish a notification to an Amazon Simple Notification Service (Amazon SNS) topic and to perform an EC2 action to reboot the instance. Subscribe the developer to the SNS topic."
      },
      {
        "id": "C",
        "text": "Create an Amazon CloudWatch alarm that evaluates the CPU utilization of the instance. Configure the alarm to invoke an AWS Systems Manager action to create an incident to notify the developer and request the reboot."
      },
      {
        "id": "D",
        "text": "Create an AWS Systems Manager runbook script to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic and to reboot the EC2 instance. Subscribe the developer to the SNS topic. Configure an Amazon CloudWatch alarm to run the Systems Manager runbook when CPU utilization for the instance remains above 90% for more than 15 minutes."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-52",
    "type": "single",
    "stem": "A company has a microservice that runs on a set of Amazon EC2 instances. The EC2 instances run behind an Application Load Balancer (ALB). A CloudOps engineer must use Amazon Route 53 to create a record that maps the ALB URL to example.com.",
    "ask": "Which type of record will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "An A record"
      },
      {
        "id": "B",
        "text": "An AAAA record"
      },
      {
        "id": "C",
        "text": "An alias record"
      },
      {
        "id": "D",
        "text": "A CNAME record"
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-53",
    "type": "single",
    "stem": "An application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The application takes up to 2 minutes to populate a local cache after the application is started. The application reports as healthy in the target group health check a few seconds after starting. A CloudOps engineer observes that after some of the instances are rebooted, the instances receive an equal share of the traffic immediately after each instance reports as healthy. The application needs to receive a gradually increasing share of the traffic while the application cache is populated.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Change the slow_start.duration_seconds target group attribute to 120 seconds. Before rebooting the instances, deregister the instances from the target group. After rebooting the instances, register the instances with the target group."
      },
      {
        "id": "B",
        "text": "Change the HealthCheckTimeoutSeconds parameter in the target group to 120 seconds. Before rebooting the instances, deregister the instances from the target group. After rebooting the instances, register the instances with the target group."
      },
      {
        "id": "C",
        "text": "Configure an Amazon CloudWatch alarm to monitor the health check status. Configure the action of the alarm to restart an EC2 instance if a health check fails. Change the loadbalancing.algorithm.type target group attribute to be weighted_random."
      },
      {
        "id": "D",
        "text": "Create an Amazon EC2 Auto Scaling group. Attach the existing EC2 instances to the Auto Scaling group. Configure an EC2 Auto Scaling lifecycle hook to move starting instances to the Pending:Wait state. Update the application to complete the lifecycle hook when the local cache has been populated."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-54",
    "type": "single",
    "stem": "A company runs an application on Amazon EC2 instances. The application stores and retrieves data from an Amazon Aurora PostgreSQL database. A developer accidentally drops a table from the database, which causes application errors. Two hours later, a CloudOps engineer needs to recover the data and make the application function again.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Use the Aurora Backtrack feature to rewind the database to a specified time, 2 hours in the past."
      },
      {
        "id": "B",
        "text": "Perform a point-in-time recovery on the existing database to restore the database to a specified point in time, 2 hours in the past."
      },
      {
        "id": "C",
        "text": "Perform a point-in-time recovery and create a new database to restore the database to a specified point in time, 2 hours in the past. Reconfigure the application to use a new database endpoint."
      },
      {
        "id": "D",
        "text": "Create a new Aurora cluster. Choose the Restore data from S3 bucket option. Choose log files up to the failure time 2 hours in the past."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-55",
    "type": "single",
    "stem": "A company runs several workloads on AWS. The company identifies five AWS Trusted Advisor service quota metrics to monitor in a specific AWS Region. The company wants to receive email notification each time resource usage exceeds 60% of one of the service quotas.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas."
      },
      {
        "id": "B",
        "text": "Create five Amazon CloudWatch alarms, one for each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas."
      },
      {
        "id": "C",
        "text": "Use the AWS Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Queue Service (Amazon SQS) queue for email notification each time that usage exceeds 60% of one of the service quotas."
      },
      {
        "id": "D",
        "text": "Use the AWS Health Dashboard to monitor each Trusted Advisor service quota metric. Configure an Amazon Simple Notification Service (Amazon SNS) topic for email notification each time that usage exceeds 60% of one of the service quotas."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-56",
    "type": "single",
    "stem": "A CloudOps engineer is troubleshooting an implementation of Amazon CloudWatch Synthetics. The CloudWatch Synthetics results must be sent to an Amazon S3 bucket. The CloudOps engineer has copied the configuration of an existing canary that runs on a VPC that has an internet gateway attached. However, the CloudOps engineer cannot get the canary to successfully start on a private VPC that has no internet access.",
    "ask": "What should the CloudOps engineer do to successfully run the canary on the private VPC?",
    "options": [
      {
        "id": "A",
        "text": "Ensure that the DNS resolution option and the DNS hostnames option are turned on in the VPC. Add the synthetics:GetCanaryRuns permission to the VPC. On the S3 bucket, add the IgnorePublicAcls permission to the CloudWatch Synthetics role."
      },
      {
        "id": "B",
        "text": "Ensure that the DNS resolution option and the DNS hostnames option are turned off in the VPC. Create a gateway VPC endpoint for Amazon S3. Add the permissions to allow CloudWatch Synthetics to use the S3 endpoint."
      },
      {
        "id": "C",
        "text": "Ensure that the DNS resolution option and the DNS hostnames option are turned off in the VPC. Add a security group to the canary to allow outbound traffic on the DNS port. Add the permissions to allow CloudWatch Synthetics to write to the S3 bucket."
      },
      {
        "id": "D",
        "text": "Ensure that the DNS resolution option and the DNS hostnames option are turned on in the VPC. Create an interface VPC endpoint for CloudWatch. Create a gateway VPC endpoint for Amazon S3. Add the permissions to allow CloudWatch Synthetics to use both endpoints."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-57",
    "type": "multi",
    "pick": 2,
    "stem": "A company deploys AWS infrastructure in a VPC that has an internet gateway. The VPC has public subnets and private subnets. An Amazon RDS for MySQL DB instance is deployed in a private subnet. An AWS Lambda function uses the same private subnet and connects to the DB instance to query data. A developer modifies the Lambda function to require the function to publish messages to an Amazon Simple Queue Service (Amazon SQS) queue. After these changes, the Lambda function times out when it tries to publish messages to the SQS queue.",
    "ask": "Which solutions will resolve this issue?",
    "options": [
      {
        "id": "A",
        "text": "Reconfigure the Lambda function so that the function is not connected to the VPC."
      },
      {
        "id": "B",
        "text": "Deploy an RDS proxy. Configure the Lambda function to connect to the DB instance through the proxy."
      },
      {
        "id": "C",
        "text": "Deploy a NAT gateway. Update the private subnet's route table to route all traffic to the NAT gateway."
      },
      {
        "id": "D",
        "text": "Create an interface endpoint for Amazon SQS in the VPC."
      },
      {
        "id": "E",
        "text": "Create a gateway endpoint for Amazon SQS in the VPC."
      }
    ],
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": "SOA-C03-58",
    "type": "single",
    "stem": "A company's security policy requires incoming SSH traffic to be restricted to a defined set of addresses. The company is using an AWS Config rule to check whether security groups allow unrestricted incoming SSH traffic. A CloudOps engineer discovers a noncompliant resource and fixes the security group manually. The CloudOps engineer wants to automate the remediation of other noncompliant resources.",
    "ask": "What is the MOST operationally efficient solution that meets these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon CloudWatch alarm for the AWS Config rule's status metric. Create an AWS Lambda function that can remove the noncompliant rule from the security group. Configure the alarm action to invoke the Lambda function."
      },
      {
        "id": "B",
        "text": "Configure an automatic remediation action on the AWS Config rule. Specify the AWS-DisableIncomingSSHOnPort22 remediation action."
      },
      {
        "id": "C",
        "text": "Configure an Amazon EventBridge rule for AWS Config configuration item change events. Create an AWS Lambda function that can remove the noncompliant rule from the security group. Configure the rule to invoke the Lambda function."
      },
      {
        "id": "D",
        "text": "Create an AWS Lambda function that can analyze a security group's inbound rules to check for unrestricted SSH access. Configure the Lambda function to remove the noncompliant rule from the security group. Configure an Amazon EventBridge rule to invoke the Lambda function every hour."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-59",
    "type": "multi",
    "pick": 2,
    "stem": "A CloudOps engineer is maintaining a web application using an Amazon CloudFront web distribution, an Application Load Balancer (ALB), Amazon RDS, and Amazon EC2 in a VPC. All services have logging enabled. The CloudOps engineer needs to investigate HTTP Layer 7 status codes from the web application.",
    "ask": "Which log sources contain the status codes?",
    "options": [
      {
        "id": "A",
        "text": "VPC Flow Logs"
      },
      {
        "id": "B",
        "text": "AWS CloudTrail logs"
      },
      {
        "id": "C",
        "text": "ALB access logs"
      },
      {
        "id": "D",
        "text": "CloudFront access logs"
      },
      {
        "id": "E",
        "text": "RDS logs"
      }
    ],
    "answer": [
      "C",
      "D"
    ]
  },
  {
    "id": "SOA-C03-60",
    "type": "single",
    "stem": "An errant process is known to use an entire processor and run at 100%. A CloudOps engineer wants to automate restarting an Amazon EC2 instance when the problem occurs for more than 2 minutes.",
    "ask": "How can this be accomplished?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon CloudWatch alarm for the EC2 instance with basic monitoring. Add an action to restart the instance."
      },
      {
        "id": "B",
        "text": "Create an Amazon CloudWatch alarm for the EC2 instance with detailed monitoring. Add an action to restart the instance."
      },
      {
        "id": "C",
        "text": "Create an AWS Lambda function to restart the EC2 instance, invoked on a scheduled basis every 2 minutes."
      },
      {
        "id": "D",
        "text": "Create an AWS Lambda function to restart the EC2 instance, invoked by EC2 health checks."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-61",
    "type": "multi",
    "pick": 2,
    "stem": "A CloudOps engineer wants to provide access to AWS services by attaching an IAM policy to multiple IAM users. The CloudOps engineer also wants to be able to change the policy and create new versions.",
    "ask": "Which combination of actions will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Add the users to an IAM service-linked role. Attach the policy to the role."
      },
      {
        "id": "B",
        "text": "Add the users to an IAM user group. Attach the policy to the group."
      },
      {
        "id": "C",
        "text": "Create an AWS managed policy."
      },
      {
        "id": "D",
        "text": "Create a customer managed policy."
      },
      {
        "id": "E",
        "text": "Create an inline policy."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "SOA-C03-62",
    "type": "single",
    "stem": "A company runs an application on Amazon EC2 instances that are in an Amazon EC2 Auto Scaling group. Scale-out actions take a long time to become complete because of long-running boot scripts. A CloudOps engineer must implement a solution to reduce the required time for scale-out actions without overprovisioning the Auto Scaling group.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Change the launch configuration to use a larger instance size."
      },
      {
        "id": "B",
        "text": "Increase the minimum number of instances in the Auto Scaling group."
      },
      {
        "id": "C",
        "text": "Add a predictive scaling policy to the Auto Scaling group."
      },
      {
        "id": "D",
        "text": "Add a warm pool to the Auto Scaling group."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-63",
    "type": "single",
    "stem": "A CloudOps engineer creates a new VPC that includes a public subnet and a private subnet. The CloudOps engineer successfully launches 11 Amazon EC2 instances in the private subnet. The CloudOps engineer attempts to launch one more EC2 instance in the same subnet. However, the CloudOps engineer receives an error message that states that not enough free IP addresses are available.",
    "ask": "What must the CloudOps engineer do to deploy more EC2 instances?",
    "options": [
      {
        "id": "A",
        "text": "Edit the private subnet to change the CIDR block to /27."
      },
      {
        "id": "B",
        "text": "Edit the private subnet to extend across a second Availability Zone."
      },
      {
        "id": "C",
        "text": "Assign additional Elastic IP addresses to the private subnet."
      },
      {
        "id": "D",
        "text": "Create a new private subnet to hold the required EC2 instances."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-64",
    "type": "single",
    "stem": "A CloudOps engineer needs to build an event infrastructure for a set of custom application-specific events. The events must be sent to an AWS Lambda function for processing. The CloudOps engineer must record the events to replay later by event type or event time.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon EventBridge custom event bus. Create an archive on the custom event bus. Create a rule to send the custom events to the Lambda function."
      },
      {
        "id": "B",
        "text": "Create an archive on the Amazon EventBridge default event bus. Use pattern matching to record the custom events. Create a rule to send the custom events to the Lambda function."
      },
      {
        "id": "C",
        "text": "Create an archive on the Amazon EventBridge default event bus. Create an EventBridge pipe to ingest the custom events and to save the custom events in the archive. Create a rule to send the custom events to the Lambda function."
      },
      {
        "id": "D",
        "text": "Create a log group in Amazon CloudWatch Logs. Create an Amazon EventBridge rule to send the custom events to the Lambda function and to the log group."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-65",
    "type": "multi",
    "pick": 2,
    "stem": "A CloudOps engineer has an AWS CloudFormation template of the company's existing infrastructure in us-west-2. The CloudOps engineer attempts to use the template to launch a new stack in eu-west-1, but the stack only partially deploys, receives an error message, and then rolls back.",
    "ask": "Why would this template fail to deploy?",
    "options": [
      {
        "id": "A",
        "text": "The template referenced an IAM user that is not available in eu-west-1."
      },
      {
        "id": "B",
        "text": "The template referenced an Amazon Machine Image (AMI) that is not available in eu-west-1."
      },
      {
        "id": "C",
        "text": "The template did not have the proper level of permissions to deploy the resources."
      },
      {
        "id": "D",
        "text": "The template requested services that do not exist in eu-west-1."
      },
      {
        "id": "E",
        "text": "CloudFormation templates can be used only to update existing services."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "SOA-C03-66",
    "type": "single",
    "stem": "A company's website runs on an Amazon EC2 Linux instance. The website needs to serve PDF files from an Amazon S3 bucket. All public access to S3 bucket is blocked at the account level. The company needs to allow website users to download the PDF files.",
    "ask": "Which solution will meet these requirements with the LEAST administrative effort?",
    "options": [
      {
        "id": "A",
        "text": "Create an IAM role that has a policy that allows s3:list* and s3:get* permissions. Assign the role to the EC2 instance. Assign a company employee to download requested PDF file to the EC2 instance and to deliver the files to website users. Create an AWS Lambda function to periodically delete local files."
      },
      {
        "id": "B",
        "text": "Create an Amazon CloudFront distribution that uses an origin access control (OAC) that points to the S3 bucket. Apply a bucket policy to the bucket to allow connections from the CloudFront distribution. Assign a company employee to provide a download URL that contains the distribution URL and the object path to users when users request PDF files."
      },
      {
        "id": "C",
        "text": "Change the S3 bucket permissions to allow public access on the source S3 bucket. Assign a company employee to provide a PDF file URL to users when users request the PDF files."
      },
      {
        "id": "D",
        "text": "Deploy an EC2 instance that has an IAM instance profile to a public subnet. Use a signed URL from the EC2 instance to provide temporary access to the S3 bucket for website users."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-67",
    "type": "single",
    "stem": "A financial services company stores customer images in an Amazon S3 bucket in the us-east-1 Region. To comply with regulations, the company must ensure that all existing objects are replicated to an S3 bucket in a second AWS Region. If an object replication fails, the company must be able to retry replication for the object.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Configure Amazon S3 Cross-Region Replication (CRR). Use Amazon S3 live replication to replicate existing objects."
      },
      {
        "id": "B",
        "text": "Configure Amazon S3 Cross-Region Replication (CRR). Use S3 Batch Replication to replicate existing objects."
      },
      {
        "id": "C",
        "text": "Configure Amazon S3 Cross-Region Replication (CRR). Use S3 Replication Time Control (S3 RTC) to replicate existing objects."
      },
      {
        "id": "D",
        "text": "Use S3 Lifecycle rules to move objects to the destination bucket in a second Region."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-68",
    "type": "single",
    "stem": "A company uses memory-optimized Amazon EC2 instances behind a Network Load Balancer (NLB) to run an application. The company launched the EC2 instances from an AWS provided Red Hat Enterprise Linux (RHEL) Amazon Machine Image (AMI). A CloudOps engineer must monitor RAM utilization in 5-minute intervals. The CloudOps engineer must ensure that the EC2 instances scale in and out appropriately based on incoming load.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Configure detailed monitoring for the EC2 instances. Configure the Amazon CloudWatch agent on the EC2 instances. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_active metric."
      },
      {
        "id": "B",
        "text": "Configure detailed monitoring for the EC2 instances. Use the mem_used_percent metric that the detailed monitoring feature provides. Create an IAM role that allows the CloudWatch agent to upload data. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_used_percent metric."
      },
      {
        "id": "C",
        "text": "Configure basic monitoring for the EC2 instances. Configure the Amazon CloudWatch agent on the EC2 instances. Create an IAM role that allows the CloudWatch agent to upload data. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_used_percent metric."
      },
      {
        "id": "D",
        "text": "Configure basic monitoring for the EC2 instances. Use the standard mem_used_percent metric for monitoring. Create an EC2 Auto Scaling group and Auto Scaling policy that is based on the mem_used_percent metric."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-69",
    "type": "single",
    "stem": "A multinational company uses an organization in AWS Organizations to manage over 200 member accounts across multiple AWS Regions. The company must ensure that all AWS resources meet specific security requirements. The company must not deploy any EC2 instances in the ap-southeast-2 Region. The company must completely block root user actions in all member accounts. The company must prevent any user from deleting AWS CloudTrail logs, including administrators. The company requires a centrally managed solution that the company can automatically apply to all existing and future accounts.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create AWS Config rules with remediation actions in each account to detect policy violations. Implement IAM permissions boundaries for the account root users."
      },
      {
        "id": "B",
        "text": "Enable AWS Security Hub across the organization. Create custom security standards to enforce the security requirements. Use AWS CloudFormation StackSets to deploy the standards to all the accounts in the organization. Set up Security Hub automated remediation actions."
      },
      {
        "id": "C",
        "text": "Use AWS Control Tower for account governance. Configure Region deny controls. Use service control policies (SCPs) to restrict root user access."
      },
      {
        "id": "D",
        "text": "Configure AWS Firewall Manager with security policies to meet the security requirements. Use an AWS Config aggregator with organization-wide conformance packs to detect security policy violations."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-70",
    "type": "single",
    "stem": "A company uses hundreds of Amazon EC2 On-Demand Instances and Spot Instances to run production and non-production workloads. The company installs and configures the AWS Systems Manager Agent (SSM Agent) on the EC2 instances. During a recent instance patch operation, some instances were not patched because the instances were either busy or down. The company needs to generate a report that lists the current patch version of all instances.",
    "ask": "Which solution will meet these requirements in the MOST operationally efficient way?",
    "options": [
      {
        "id": "A",
        "text": "Use Systems Manager Inventory to collect patch versions. Generate a report of all instances."
      },
      {
        "id": "B",
        "text": "Use Systems Manager Run Command to remotely collect patch version information. Generate a report of all instances."
      },
      {
        "id": "C",
        "text": "Use AWS Config to track EC2 instance configuration changes by using output from the SSM Agents. Create a custom rule to check for patch versions. Generate a report of all unpatched instances."
      },
      {
        "id": "D",
        "text": "Use AWS Config to monitor the patch status of the EC2 instances by using output from the SSM Agents. Create a configuration compliance rule to check whether patches are installed. Generate a report of all instances."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-71",
    "type": "single",
    "stem": "A CloudOps engineer is using AWS Compute Optimizer to generate recommendations for a fleet of Amazon EC2 instances. Some of the instances use newly released instance types, while other instances use older instance types. After the analysis is complete, the CloudOps engineer notices that some of the EC2 instances are missing from the Compute Optimizer dashboard.",
    "ask": "What is the likely cause of this issue?",
    "options": [
      {
        "id": "A",
        "text": "The missing instances have insufficient historical Amazon CloudWatch metric data for analysis."
      },
      {
        "id": "B",
        "text": "Compute Optimizer does not support the instance types of the missing instances."
      },
      {
        "id": "C",
        "text": "Compute Optimizer already considers the missing instances to be optimized."
      },
      {
        "id": "D",
        "text": "The missing instances are running a Windows operating system."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-72",
    "type": "single",
    "stem": "A company runs a workload in an Amazon VPC. The company configures Amazon CloudWatch Logs for the workload. The company needs a solution to automatically detect unusual API activity and security events in the company's AWS account.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Use Amazon Inspector to scan VPC flow logs."
      },
      {
        "id": "B",
        "text": "Use Amazon GuardDuty to monitor CloudWatch logs."
      },
      {
        "id": "C",
        "text": "Implement AWS CloudTrail Insights."
      },
      {
        "id": "D",
        "text": "Use AWS Config automatic anomaly detection."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-73",
    "type": "single",
    "stem": "A company generates hundreds of images and uploads the images to an Amazon S3 bucket. The company manually copies the images to an always-on Amazon EC2 instance for processing. It usually takes between 30 seconds and 120 seconds to process each image. A CloudOps engineer wants to automate the image processing solution to process the images as soon as they arrive in the S3 bucket.",
    "ask": "Which solution will meet these requirements MOST cost-effectively?",
    "options": [
      {
        "id": "A",
        "text": "Configure S3 Event Notifications to invoke the EC2 instance when images are uploaded to the S3 bucket. Run the image processing solution on the EC2 instance to process the images."
      },
      {
        "id": "B",
        "text": "Configure S3 Event Notifications to invoke an Amazon EventBridge rule. Configure the EventBridge rule to start a preconfigured AWS Glue ETL job to process images."
      },
      {
        "id": "C",
        "text": "Configure S3 Event Notifications to invoke an AWS Lambda function that runs image processing logic when new images are uploaded on the source S3 bucket."
      },
      {
        "id": "D",
        "text": "Configure S3 Event Notifications to invoke a task on an Amazon Elastic Container Service (Amazon ECS) container that is backed by EC2 instances when the images are uploaded to the S3 bucket. Configure the ECS task to process the images."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-74",
    "type": "single",
    "stem": "A company uses an organization in AWS Organizations to manage multiple AWS accounts. The company needs to send specific events from all the accounts in the organization to a new receiver account so an AWS Lambda function can process the events. A CloudOps engineer needs to configure Amazon EventBridge to route the events to a target event bus in the us-west-2 Region in the new receiver account. The CloudOps engineer creates rules in the sender accounts and the receiver account that match the specified events. The rules do not specify an account parameter in the event pattern. The CloudOps engineer creates IAM roles in the sender accounts to allow PutEvents actions on the target event bus. The first test events that originate from the us-east-1 Region are not being processed by the Lambda function in the receiving account.",
    "ask": "What is the likely reason the events are not processed?",
    "options": [
      {
        "id": "A",
        "text": "Interface VPC endpoints for EventBridge are required in the sender accounts and receiver accounts."
      },
      {
        "id": "B",
        "text": "The target Lambda function is in a different AWS Region, which is not supported by EventBridge."
      },
      {
        "id": "C",
        "text": "The resource-based policy on the target event bus must be modified to allow PutEvents API calls from the sender accounts."
      },
      {
        "id": "D",
        "text": "The rule in the receiving account must specify {\"account\": [\"sender-account-id\"]} in its event pattern and must include the receiving account ID."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-75",
    "type": "single",
    "stem": "A developer enables versioning on an Amazon S3 bucket. When the developer attempts to perform a write operation on the bucket, the developer encounters an HTTP 404 NoSuchKey error. A CloudOps engineer must resolve this issue.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Disable versioning on the S3 bucket and retry the write operation."
      },
      {
        "id": "B",
        "text": "Modify the bucket policy to allow write operations on versioned objects."
      },
      {
        "id": "C",
        "text": "Wait at least 15 minutes after enabling versioning, and then perform the write operation."
      },
      {
        "id": "D",
        "text": "Enable S3 Transfer Acceleration on the bucket."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-76",
    "type": "single",
    "stem": "A CloudOps engineer creates a new VPC that contains a private subnet, a security group that allows all outbound traffic, and an endpoint for Amazon EC2 Instance Connect in a private subnet. The CloudOps engineer associates the security group with EC2 Instance Connect. The CloudOps engineer launches an EC2 instance from an Amazon Linux Amazon Machine Image (AMI) in the private subnet. The CloudOps engineer associates the instance with the same subnet that the security group uses. The CloudOps engineer launches the EC2 instance without an SSH key pair. The CloudOps engineer tries to connect to the instance by using the EC2 Instance Connect endpoint. However, the connection fails.",
    "ask": "How can the CloudOps engineer connect to the instance?",
    "options": [
      {
        "id": "A",
        "text": "Create an inbound rule in the security group to allow HTTPS traffic on port 443 from the private subnet."
      },
      {
        "id": "B",
        "text": "Create an inbound rule in the security group to allow SSH traffic on port 22 from the private subnet."
      },
      {
        "id": "C",
        "text": "Create an IAM instance profile that allows AWS Systems Manager Session Manager to access the EC2 instance. Associate the instance profile with the instance."
      },
      {
        "id": "D",
        "text": "Recreate the EC2 instance. Associate an SSH key pair with the instance."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-77",
    "type": "single",
    "stem": "A company is implementing Cross-Region Replication (CRR) for the company's Amazon S3 buckets. The S3 buckets are in the us-east-1 Region. The company uses server-side encryption with Amazon S3 managed keys (SSE-S3) to secure the data in the buckets. A CloudOps engineer creates a new AWS account to store backups in S3 buckets. All backup buckets are in the us-west-2 Region. The CloudOps engineer enables versioning on the source buckets and the destination buckets. The CloudOps engineer creates an IAM role in the source account for s3.amazonaws.com. The CloudOps engineer grants the IAM role permissions to perform read actions in the source buckets, replicate actions in the destination buckets, and encrypt actions that use the destination bucket's key. The destination bucket policy allows the IAM role to perform replicate and read actions. After the replication configuration is complete, the CloudOps engineer notices that objects are not replicating.",
    "ask": "What is the likely reason the objects are not replicating?",
    "options": [
      {
        "id": "A",
        "text": "The IAM role and bucket policies must have the ObjectOwnerOverrideToBucketOwner permission."
      },
      {
        "id": "B",
        "text": "The objects in the source buckets and destination buckets must be encrypted by multi-Region keys."
      },
      {
        "id": "C",
        "text": "Gateway VPC endpoints for Amazon S3 must be created in the source accounts and the destination account."
      },
      {
        "id": "D",
        "text": "The destination buckets must use server-side encryption with AWS KMS keys (SSE-KMS)."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-78",
    "type": "single",
    "stem": "A company has a VPC that contains a public subnet and a private subnet. The company deploys an Amazon EC2 instance that uses an Amazon Linux Amazon Machine Image (AMI) and has the AWS Systems Manager Agent (SSM Agent) installed in the private subnet. The EC2 instance is in a security group that allows only outbound traffic. A CloudOps engineer needs to give a group of privileged administrators the ability to connect to the instance through SSH without exposing the instance to the internet.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create an EC2 Instance Connect endpoint in the private subnet. Update the security group to allow inbound SSH traffic. Create an IAM group for privileged administrators. Assign the PowerUserAccess managed policy to the IAM group."
      },
      {
        "id": "B",
        "text": "Create a Systems Manager endpoint in the private subnet. Update the security group to allow SSH traffic from the private network where the Systems Manager endpoint is connected. Create an IAM group for privileged administrators. Assign the PowerUserAccess managed policy to the IAM group."
      },
      {
        "id": "C",
        "text": "Create an EC2 Instance Connect endpoint in the public subnet. Update the security group to allow SSH traffic from the private network. Create an IAM group for privileged administrators. Assign the PowerUserAccess managed policy to the IAM group."
      },
      {
        "id": "D",
        "text": "Create a Systems Manager endpoint in the public subnet. Create an IAM role that has the AmazonSSMManagedInstanceCore permission for the EC2 instance. Create an IAM group for privileged administrators. Assign the AmazonEC2ReadOnlyAccess IAM policy to the IAM group."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-79",
    "type": "single",
    "stem": "A company runs a web-based application on Amazon EC2 instances behind an Application Load Balancer (ALB) in the us-east-1 Region. Users from around the world access the application. Users from outside North America report high latency and inconsistent application performance. The company must improve latency and application performance for all global users.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Use AWS Global Accelerator in front of the ALB."
      },
      {
        "id": "B",
        "text": "Deploy a Network Load Balancer (NLB) in front of the ALB."
      },
      {
        "id": "C",
        "text": "Replace the ALB with a Network Load Balancer (NLB)."
      },
      {
        "id": "D",
        "text": "Configure Amazon Route 53 health checks to failover between AWS Regions based on latency thresholds."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-80",
    "type": "single",
    "stem": "A CloudOps engineer needs to ensure that AWS resources across multiple AWS accounts are tagged consistently. The company uses an organization in AWS Organizations to centrally manage the accounts. The company wants to implement cost allocation tags to accurately track the costs that are allocated to each business unit.",
    "ask": "Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      {
        "id": "A",
        "text": "Use Organizations tag policies to enforce mandatory tagging on all resources. Enable cost allocation tags in the AWS Billing and Cost Management console."
      },
      {
        "id": "B",
        "text": "Configure AWS CloudTrail events to invoke an AWS Lambda function to detect untagged resources and to automatically assign tags based on predefined rules."
      },
      {
        "id": "C",
        "text": "Use AWS Config to evaluate tagging compliance. Use AWS Budgets to apply tags for cost allocation."
      },
      {
        "id": "D",
        "text": "Use AWS Service Catalog to provision only pre-tagged resources. Use AWS Trusted Advisor to enforce tagging across the organization."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-81",
    "type": "single",
    "stem": "A company has multiple Amazon EC2 instances that run the Ubuntu operating system (OS). The company must patch the OS regularly. A CloudOps engineer installs patches manually every week. The company adds new EC2 instances that run Ubuntu continuously. The CloudOps engineer needs to automate the patching process.",
    "ask": "Which solution will meet this requirement in the MOST operationally efficient way?",
    "options": [
      {
        "id": "A",
        "text": "Create an AWS Lambda function to connect to the EC2 instances by using SSH and to install the patches. Configure the Lambda function to run every week."
      },
      {
        "id": "B",
        "text": "Install the AWS Systems Manager Agent (SSM Agent) on the EC2 instances. Configure Systems Manager Patch Manager to install patches on the instances every week."
      },
      {
        "id": "C",
        "text": "Use AWS Systems Manager Inventory to identify unpatched EC2 instances and to install OS patches."
      },
      {
        "id": "D",
        "text": "Create an Amazon EventBridge rule that has a cron expression to install the patches every week. Configure the EventBridge rule to target the EC2 instances. Configure an action to run OS updates on the targeted instances."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-82",
    "type": "single",
    "stem": "A global company runs a critical primary workload in the us-east-1 Region. The company wants to ensure business continuity with minimal downtime in case of a workload failure. The company wants to replicate the workload to a second AWS Region. A CloudOps engineer needs a solution that achieves a recovery time objective (RTO) of less than 10 minutes and a zero recovery point objective (RPO) to meet service level agreements.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Implement a pilot light architecture that provides real-time data replication in the second Region. Configure Amazon Route 53 health checks and automated DNS failover."
      },
      {
        "id": "B",
        "text": "Implement a warm standby architecture that provides regular data replication in a second Region. Configure Amazon Route 53 health checks and automated DNS failover."
      },
      {
        "id": "C",
        "text": "Implement an active-active architecture that provides real-time data replication across two Regions. Use Amazon Route 53 health checks and a weighted routing policy."
      },
      {
        "id": "D",
        "text": "Implement a custom script to generate a regular backup of the data and store it in an S3 bucket that is in a second Region. Use the backup to launch the application in the second Region in the event of a workload failure."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-83",
    "type": "single",
    "stem": "A CloudOps engineer wants to configure observability of specific metrics for a public website that runs on Amazon Elastic Kubernetes Service (Amazon EKS). The CloudOps engineer wants to observe latency, traffic, errors, and saturation metrics. The CloudOps engineer wants to define service level objectives (SLOs) and to monitor service level indicators (SLIs). The CloudOps engineer also wants to correlate metrics, logs, and traces to support faster time to issue resolution.",
    "ask": "Which solution will meet these requirements with the LEAST operational effort?",
    "options": [
      {
        "id": "A",
        "text": "Use Amazon CloudWatch Application Signals to automatically collect and monitor the specified metrics for the EKS workloads."
      },
      {
        "id": "B",
        "text": "Configure AWS Distro for OpenTelemetry for the website to generate metrics. Use Amazon Managed Service for Prometheus to collect the specified metrics. Use Amazon Managed Grafana to visualize metrics."
      },
      {
        "id": "C",
        "text": "Configure Amazon CloudWatch RUM and CloudWatch Synthetics canaries to automatically collect and monitor the specified metrics for the EKS workloads."
      },
      {
        "id": "D",
        "text": "Configure Amazon CloudWatch Application Insights to detect common application performance problems and anomalies and to monitor the specified metrics for the EKS workloads."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-84",
    "type": "single",
    "stem": "A CloudOps engineer needs to disable automatic backups for an Amazon RDS instance to optimize costs. When the CloudOps engineer attempts to disable the backups, the CloudOps engineer receives an error message that states the retention period must be between 1 and 35.",
    "ask": "What is the likely cause of this issue?",
    "options": [
      {
        "id": "A",
        "text": "The RDS instance has insufficient permissions to change the backup retention period."
      },
      {
        "id": "B",
        "text": "Read replicas are configured for the RDS instance."
      },
      {
        "id": "C",
        "text": "The RDS instance is using the default backup window."
      },
      {
        "id": "D",
        "text": "The RDS instance is part of a Multi-AZ deployment."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-85",
    "type": "single",
    "stem": "A company hosts an ecommerce website on a fleet of Nitro-based Amazon EC2 Linux instances. During a recent sales event, some customers reported HTTP timeout errors. To help identify the root cause of the errors, a CloudOps engineer needs more detailed network metrics from the Elastic Network Adapter (ENA) driver. The CloudOps engineer must obtain the conntrack_allowance_available metric and the conntrack_allowance_exceeded metric.",
    "ask": "Which solution will provide these metrics with the MOST operational efficiency?",
    "options": [
      {
        "id": "A",
        "text": "Install the Amazon CloudWatch agent on the instances. Filter by the conntrack_allowance_available metric and the conntrack_allowance_exceeded metric."
      },
      {
        "id": "B",
        "text": "Install the collectd daemon and the Amazon CloudWatch agent on the EC2 instances. Filter by the conntrack_allowance_available metric and the conntrack_allowance_exceeded metric."
      },
      {
        "id": "C",
        "text": "Enable VPC Flow Logs. Filter by the conntrack_allowance_available metric and the conntrack_allowance_exceeded metric."
      },
      {
        "id": "D",
        "text": "Enable Performance Insights for the instances. Use Amazon CloudWatch to view the conntrack_allowance_available metric and the conntrack_allowance_exceeded metric."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-86",
    "type": "single",
    "stem": "A CloudOps engineer has an Amazon S3 bucket and a new AWS Lambda function. The CloudOps engineer tries to configure a new event notification from the S3 bucket to the Lambda function by using the Lambda console. The configuration fails and returns the following error: \"Unable to validate the following destination configurations.\" The engineer confirms that the new Lambda function and the function's IAM role are correctly configured.",
    "ask": "What is the cause of this error?",
    "options": [
      {
        "id": "A",
        "text": "The maximum number of S3 event notification destinations has been exceeded for the S3 bucket."
      },
      {
        "id": "B",
        "text": "The S3 bucket owner needs to grant the Lambda function explicit cross-account permissions by using a resource policy."
      },
      {
        "id": "C",
        "text": "The new Lambda function's resource-based policy is missing the lambda:InvokeFunction permission for Amazon S3."
      },
      {
        "id": "D",
        "text": "The S3 bucket has an existing stale event notification that points to a deleted or permission-deficient resource."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-87",
    "type": "single",
    "stem": "A company has scientists who upload large data objects to an Amazon S3 bucket. The scientists upload the objects as multipart uploads. The multipart uploads often fail because of poor end-client connectivity. The company wants to optimize storage costs that are associated with the data. A CloudOps engineer must implement a solution that presents metrics for incomplete uploads. The solution also must automatically delete any incomplete uploads after 7 days.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Review the Incomplete Multipart Upload Bytes metric in the S3 Storage Lens dashboard. Create an S3 Lifecycle policy to automatically delete any incomplete multipart uploads after 7 days."
      },
      {
        "id": "B",
        "text": "Implement S3 Intelligent-Tiering to move data into lower-cost storage classes after 7 days. Create an S3 Storage Lens policy to automatically delete any incomplete multipart uploads after 7 days."
      },
      {
        "id": "C",
        "text": "Access the S3 console. Review the Metrics tab to check the storage that incomplete multipart uploads are consuming. Create an AWS Lambda function to delete any incomplete multipart uploads after 7 days."
      },
      {
        "id": "D",
        "text": "Use the S3 analytics storage class analysis tool to identify and measure incomplete multipart uploads. Configure an S3 bucket policy to enforce restrictions on multipart uploads to delete incomplete multipart uploads after 7 days."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-88",
    "type": "single",
    "stem": "A company uses an organization in AWS Organizations to manage a multi-account AWS environment. The company creates a new Amazon EBS backed Amazon Machine Image (AMI). The company shares the AMI across the organization. Employees must use the AMI to launch all new Linux-based Amazon EC2 instances across the entire organization. In one of the company's application accounts, an employee uses the new AMI to launch a new workload. The EC2 instance launches, but it is terminated immediately.",
    "ask": "What the MOST likely reason that the instance did not fully boot?",
    "options": [
      {
        "id": "A",
        "text": "The user who launched the instance does not have ec2:RunInstances permissions within the application account."
      },
      {
        "id": "B",
        "text": "The company encrypted the AMI by using an AWS KMS key that the user who launched the EC2 instance does not have access to."
      },
      {
        "id": "C",
        "text": "There is a service control policy (SCP) that denies the user who launched the EC2 instance access to launch instances in the application account."
      },
      {
        "id": "D",
        "text": "The user launched the EC2 instance into a subnet that does not have access to the internet."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-89",
    "type": "single",
    "stem": "A company launches an application. The company hosts the application on Amazon EC2 instances. The instances are in a private subnet for security reasons. An application team needs SSH access to the instances from corporate desktops in an office. The desktops are connected to the internet.",
    "ask": "Which solution will provide this access?",
    "options": [
      {
        "id": "A",
        "text": "Configure a NAT gateway in the public subnet."
      },
      {
        "id": "B",
        "text": "Create an AWS Site-to-Site VPN connection between the on-premises network and the VPC."
      },
      {
        "id": "C",
        "text": "Configure an internet gateway. Attach the internet gateway to the VPC."
      },
      {
        "id": "D",
        "text": "Create security groups that allow inbound traffic from the on-premises network to resources in the public subnets."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-90",
    "type": "single",
    "stem": "A CloudOps engineer must troubleshoot performance issues for a web application that is delivered through Amazon CloudFront. The metrics show a consistently low cache hit ratio that leads to many requests being forwarded to the origin.",
    "ask": "Which configuration will increase the cache hit ratio?",
    "options": [
      {
        "id": "A",
        "text": "Modify the origin's Cache-Control header to max-age=0."
      },
      {
        "id": "B",
        "text": "Reduce the TTL for cached objects."
      },
      {
        "id": "C",
        "text": "Reduce the number of request headers, query strings, and cookies included in the cache key."
      },
      {
        "id": "D",
        "text": "Configure signed URLs or signed cookies to restrict access to content."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-91",
    "type": "single",
    "stem": "A company plans to deploy a database on an Amazon Aurora MySQL DB cluster. The database will store data for a demonstration environment. The data must be reset on a daily basis.",
    "ask": "What is the MOST operationally efficient solution that meets these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create a manual snapshot of the DB cluster after the data has been populated. Create an Amazon EventBridge rule to invoke an AWS Lambda function on a daily basis. Configure the function to restore the snapshot and then delete the previous DB cluster."
      },
      {
        "id": "B",
        "text": "Enable the Backtrack feature during the creation of the DB cluster. Specify a target backtrack window of 48 hours. Create an Amazon EventBridge rule to invoke an AWS Lambda function on a daily basis. Configure the function to perform a backtrack operation."
      },
      {
        "id": "C",
        "text": "Export a manual snapshot of the DB cluster to an Amazon S3 bucket after the data has been populated. Create an Amazon EventBridge rule to invoke an AWS Lambda function on a daily basis. Configure the function to restore the snapshot from Amazon S3."
      },
      {
        "id": "D",
        "text": "Set the DB cluster backup retention period to 2 days. Create an Amazon EventBridge rule to invoke an AWS Lambda function on a daily basis. Configure the function to restore the DB cluster to a point in time and then delete the previous DB cluster."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-92",
    "type": "single",
    "stem": "A company's application runs on Amazon EC2 instances behind an Application Load Balancer (ALB). The company has configured an Amazon CloudWatch alarm to monitor the HTTPCode_Target_5XX_Count metric. The application crashes every few days during business hours. The crashes trigger the CloudWatch alarm and result in service disruption. The cause of the crashes is a memory leak in the application. While developers work to fix the problem, a CloudOps engineer needs to implement a temporary solution. The solution must automatically reboot the EC2 instances every day and must minimize application disruption during business hours.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon EventBridge rule that is scheduled to run outside of business hours. Configure the rule to invoke the StartInstances operation on the EC2 instances."
      },
      {
        "id": "B",
        "text": "Use AWS Systems Manager to create a daily maintenance window that is outside of business hours. Register the EC2 instances as a target. Assign the AWS-RestartEC2Instance runbook to the maintenance window."
      },
      {
        "id": "C",
        "text": "Configure an additional CloudWatch alarm to monitor the StatusCheckFailed_System metric for the EC2 instances. Configure an EC2 action on the additional alarm to reboot the instances."
      },
      {
        "id": "D",
        "text": "Configure an additional CloudWatch alarm that is triggered every time the application crashes. Configure an EC2 action on the additional alarm to restart the application on the EC2 instances."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-93",
    "type": "single",
    "stem": "A company has an Amazon S3 bucket that has server-side encryption with AWS KMS keys (SSE-KMS) enabled. Several applications read from the S3 bucket for daily reporting. The company clears the data in the S3 bucket weekly when the company moves the data into a data warehouse. As more applications read from the S3 bucket, the cost of KMS-related transactions is increasing. A CloudOps engineer needs to reduce the KMS costs without removing S3 encryption and without losing access to existing objects.",
    "ask": "Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      {
        "id": "A",
        "text": "Enable S3 Bucket Keys on the S3 bucket. Specify the existing KMS key."
      },
      {
        "id": "B",
        "text": "Change the encryption type on the S3 bucket to server-side encryption with customer-provided keys (SSE-C)."
      },
      {
        "id": "C",
        "text": "Use Amazon CloudFront to cache the objects in the S3 bucket and to serve the objects to the applications."
      },
      {
        "id": "D",
        "text": "Configure the applications to connect to the S3 bucket through an S3 access point."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-94",
    "type": "single",
    "stem": "A retail company runs a web application. The application uses an Application Load Balancer (ALB) to distribute traffic across multiple Amazon EC2 instances in two Availability Zones. The application experiences high traffic during flash sales. The company needs to ensure even distribution of requests across all healthy instances. Additionally, the company requires session persistence for shopping cart functionality.",
    "ask": "Which configuration will meet these requirements with the LEAST administrative effort?",
    "options": [
      {
        "id": "A",
        "text": "Configure the ALB target group to use the round robin algorithm. Enable stickiness and cross-zone load balancing."
      },
      {
        "id": "B",
        "text": "Switch the ALB to a Network Load Balancer. Modify the target group to use the least outstanding requests algorithm. Enable stickiness. Disable cross-zone load balancing."
      },
      {
        "id": "C",
        "text": "Configure the ALB target group to use the weighted round robin algorithm. Implement session persistence by using AWS Lambda functions to store session data in Amazon DynamoDB."
      },
      {
        "id": "D",
        "text": "Configure the ALB listener with path-based routing to direct shopping cart requests to a dedicated target group with sticky sessions. Use the round robin algorithm without stickiness for a second target group."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-95",
    "type": "single",
    "stem": "A company runs a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The company needs an AWS Lambda function to perform a custom recovery procedure on the application server when the application returns an HTTP 500 status code. A CloudOps engineer needs to design a solution that detects HTTP 500 status codes and runs the Lambda function reliably when errors are detected.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Configure an Amazon CloudWatch alarm on the HTTPCode_Target_5XX_Count ALB target group metric. Set the alarm action to run the Lambda function."
      },
      {
        "id": "B",
        "text": "Deploy a new Lambda function that continuously scans the ALB access logs in Amazon S3 to detect HTTP 500 status codes and then invokes the existing lambda function."
      },
      {
        "id": "C",
        "text": "Enable AWS CloudTrail on the application instances. Configure Amazon CloudWatch Logs metric filters to detect HTTP 500 status codes and run the Lambda function."
      },
      {
        "id": "D",
        "text": "Create an Amazon EventBridge rule for all ALB request events that invokes the Lambda function. Configure the Lambda function to filter for HTTP 500 status codes internally."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-97",
    "type": "single",
    "stem": "A company uses default settings to create an AWS Lambda function. The function needs to access an Amazon RDS database that is in a private subnet of a VPC. The function has the correct IAM permissions to access the database. The private subnet has appropriate routing configurations and is accessible from within the VPC. However, the Lambda function is unable to connect to the RDS instance.",
    "ask": "What is the likely reason the Lambda function cannot connect to the RDS instance?",
    "options": [
      {
        "id": "A",
        "text": "The company did not set the RDS instance as the destination for the Lambda function in the function configuration."
      },
      {
        "id": "B",
        "text": "The Lambda function configuration did not deploy the function in the same VPC that contains the RDS instance."
      },
      {
        "id": "C",
        "text": "The VPC where the Lambda function is deployed is not peered with the VPC where the RDS instance is deployed."
      },
      {
        "id": "D",
        "text": "The security group for the Lambda function does not allow outbound access to the RDS instance."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-98",
    "type": "multi",
    "pick": 2,
    "stem": "A CloudOps engineer is unable to launch Amazon EC2 instances into a VPC because there are no available private IPv4 addresses in the VPC.",
    "ask": "Which combination of actions must the CloudOps engineer take to launch the instances?",
    "options": [
      {
        "id": "A",
        "text": "Associate a secondary IPv4 CIDR block with the VPC."
      },
      {
        "id": "B",
        "text": "Associate a primary IPv6 CIDR block with the VPC."
      },
      {
        "id": "C",
        "text": "Create a new subnet for the VPC."
      },
      {
        "id": "D",
        "text": "Modify the CIDR block of the VPC."
      },
      {
        "id": "E",
        "text": "Modify the CIDR block of the subnet that is associated with the instances."
      }
    ],
    "answer": [
      "A",
      "C"
    ]
  },
  {
    "id": "SOA-C03-99",
    "type": "multi",
    "pick": 2,
    "stem": "A company is running a stateless application. The application consists of a web server and a PostgreSQL database that run on a single Amazon EC2 instance. The EC2 instance becomes overloaded during times of high application traffic, leading to slow response times. A CloudOps engineer needs to implement a solution to resolve the application's performance issues. The solution must accommodate increased application traffic as the number of users continues to grow. The solution also must make the application highly available.",
    "ask": "Which combination of steps will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon CloudFront distribution. Specify the EC2 instance as the origin."
      },
      {
        "id": "B",
        "text": "Configure an EC2 Auto Scaling group of web servers behind an Application Load Balancer."
      },
      {
        "id": "C",
        "text": "Upgrade the existing EC2 instance to a larger instance type with more CPU and memory resources."
      },
      {
        "id": "D",
        "text": "Use an Amazon RDS for PostgreSQL Multi-AZ deployment for the database. Point the application to the new endpoint."
      },
      {
        "id": "E",
        "text": "Upgrade the PostgreSQL database on the EC2 instance to a newer version."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "SOA-C03-100",
    "type": "single",
    "stem": "A CloudOps engineer needs to configure a caching layer for a read-heavy application that uses an Amazon RDS for PostgreSQL database. The application exists across three AWS Regions. Read and write activities occur in the primary Region. In the two secondary Regions, read-only activity occurs on RDS for PostgreSQL cross-Region read replicas. The cache in each Region must consist of the same data to provide a consistent user experience across Regions.",
    "ask": "Which solution for the caching layer will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Set up an Amazon ElastiCache (Redis OSS) global datastore. Include a read and write cluster in the primary Region. Include a read-only cluster in each secondary Region."
      },
      {
        "id": "B",
        "text": "Set up an Amazon ElastiCache (Memcached) global database. Include a read and write cluster in the primary Region. Include a read-only cluster in each secondary Region."
      },
      {
        "id": "C",
        "text": "Set up query caching on the RDS for PostgreSQL database in the primary Region. Configure query cache replication to the secondary RDS cross-Region replicas."
      },
      {
        "id": "D",
        "text": "Set up an Amazon ElastiCache (Memcached) cluster with cluster mode enabled in all three Regions. Set up ElastiCache cross-Region replication from the primary Region to the secondary Regions."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-101",
    "type": "single",
    "stem": "A company uses a large number of Linux based Amazon EC2 instances to run business operations such as ordering, fulfillment, and billing. The company uses AWS Systems Manager to manage the EC2 instances. The company wants to ensure that the Systems Manager Agent (SSM Agent) is always up to date with the latest version.",
    "ask": "Which solution will meet this requirement in the MOST operationally efficient way?",
    "options": [
      {
        "id": "A",
        "text": "Enable the Auto update SSM Agent setting in Systems Manager Fleet Manager."
      },
      {
        "id": "B",
        "text": "Subscribe to SSM Agent notifications on Github. Configure the subscription events to invoke an Amazon SNS topic. Configure the SNS topic to run a custom AWS Lambda function to update the SSM Agent by using the Systems Manager Run Command API."
      },
      {
        "id": "C",
        "text": "Enable the Auto update SSM Agent setting in Systems Manager Patch Manager."
      },
      {
        "id": "D",
        "text": "Subscribe to SSM Agent notifications on Github. Configure the subscription events to invoke an Amazon SNS topic. Configure the topic to run a custom AWS Lambda function to update the SSM Agent by using a Systems Manager Automation document."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-102",
    "type": "single",
    "stem": "A CloudOps engineer needs to implement a monitoring system to collect instance metrics every minute for an application. The application runs on a highly available pair of Amazon EC2 instances. The monitoring system must send an email alert when the metrics exceed a predefined threshold.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Use the AWS Health Dashboard to extract the instance metrics. Configure Amazon EventBridge to detect and react to changes in the metrics and to send email alerts."
      },
      {
        "id": "B",
        "text": "Use AWS CloudTrail to monitor the instances. Copy the logs to an Amazon S3 bucket. Configure an AWS Lambda function to send email alerts based on the logs from the S3 bucket."
      },
      {
        "id": "C",
        "text": "Use basic monitoring in Amazon CloudWatch for the instance metrics. Configure CloudWatch alarms that use Amazon SNS to send email alerts."
      },
      {
        "id": "D",
        "text": "Use detailed monitoring in Amazon CloudWatch for the instance metrics. Configure CloudWatch alarms that use Amazon SNS to send email alerts."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-103",
    "type": "multi",
    "pick": 2,
    "stem": "A company is managing a website with a global user base hosted on Amazon EC2 with an Application Load Balancer (ALB). To reduce the load on the web servers, a CloudOps engineer configures an Amazon CloudFront distribution with the ALB as the origin. After a week of monitoring the solution, the CloudOps engineer notices that requests are still being served by the ALB and there is no change in the web server load.",
    "ask": "What are possible causes for this problem?",
    "options": [
      {
        "id": "A",
        "text": "CloudFront does not have the ALB configured as the origin access identity."
      },
      {
        "id": "B",
        "text": "The DNS is still pointing to the ALB instead of the CloudFront distribution."
      },
      {
        "id": "C",
        "text": "The ALB security group is not permitting inbound traffic from CloudFront."
      },
      {
        "id": "D",
        "text": "The default, minimum, and maximum Time to Live (TTL) are set to 0 seconds on the CloudFront distribution."
      },
      {
        "id": "E",
        "text": "The target groups associated with the ALB are configured for sticky sessions."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "SOA-C03-104",
    "type": "single",
    "stem": "A company is undergoing an external audit of its systems, which run wholly on AWS. A CloudOps engineer must supply documentation of Payment Card Industry Data Security Standard (PCI DSS) compliance for the infrastructure managed by AWS.",
    "ask": "Which set of actions should the CloudOps engineer take to meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Download the applicable reports from the AWS Artifact portal and supply these to the auditors."
      },
      {
        "id": "B",
        "text": "Download complete copies of the AWS CloudTrail log files and supply these to the auditors."
      },
      {
        "id": "C",
        "text": "Download complete copies of the Amazon CloudWatch logs and supply these to the auditors."
      },
      {
        "id": "D",
        "text": "Provide the auditors with administrative access to the production AWS account so that the auditors can determine compliance."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-105",
    "type": "single",
    "stem": "A CloudOps engineer has used AWS CloudFormation to deploy a serverless application into a production VPC. The application consists of an AWS Lambda function, an Amazon DynamoDB table, and an Amazon API Gateway API. The CloudOps engineer must delete the AWS CloudFormation stack without deleting the DynamoDB table.",
    "ask": "Which action should the CloudOps engineer take before deleting the AWS CloudFormation stack?",
    "options": [
      {
        "id": "A",
        "text": "Add a Retain deletion policy to the DynamoDB resource in the AWS CloudFormation stack."
      },
      {
        "id": "B",
        "text": "Add a Snapshot deletion policy to the DynamoDB resource in the AWS CloudFormation stack."
      },
      {
        "id": "C",
        "text": "Enable termination protection on the AWS CloudFormation stack."
      },
      {
        "id": "D",
        "text": "Update the application's IAM policy with a Deny statement for the dynamodb:DeleteTable action."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-106",
    "type": "single",
    "stem": "A CloudOps engineer manages policies for many AWS member accounts in an AWS Organizations structure. Administrators on other teams have access to the account root user credentials of the member accounts. The CloudOps engineer must prevent all teams, including their administrators, from using Amazon DynamoDB. The solution must not affect the ability of the teams to access other AWS services.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "In all member accounts, configure IAM policies that deny access to all DynamoDB resources for all users, including the root user."
      },
      {
        "id": "B",
        "text": "Create a service control policy (SCP) in the management account to deny all DynamoDB actions. Apply the SCP to the root of the organization."
      },
      {
        "id": "C",
        "text": "In all member accounts, configure IAM policies that deny AmazonDynamoDBFullAccess to all users, including the root user."
      },
      {
        "id": "D",
        "text": "Remove the default service control policy (SCP) in the management account. Create a replacement SCP that includes a single statement that denies all DynamoDB actions."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-107",
    "type": "multi",
    "pick": 2,
    "stem": "A CloudOps engineer must create an IAM policy for a developer who needs access to specific AWS services. Based on the requirements, the CloudOps engineer creates a policy that allows the actions storagegateway:Describe*, elasticloadbalancing:*, lambda:*, and sqs:List* on all resources.",
    "ask": "Which actions does this policy allow?",
    "options": [
      {
        "id": "A",
        "text": "Create an AWS Storage Gateway."
      },
      {
        "id": "B",
        "text": "Create an IAM role for an AWS Lambda function."
      },
      {
        "id": "C",
        "text": "Delete an Amazon SQS queue."
      },
      {
        "id": "D",
        "text": "Describe AWS load balancers."
      }
    ],
    "answer": [
      "B",
      "D"
    ]
  },
  {
    "id": "SOA-C03-108",
    "type": "single",
    "stem": "A development team wants to match events on Amazon EventBridge where the state of an Amazon EC2 machine is not \"terminated\".",
    "ask": "Which event pattern should the development team use to find relevant events?",
    "options": [
      {
        "id": "A",
        "text": "{\"detail\": {\"state\": [\"not equals-ignore-case\": \"terminated\"]}}"
      },
      {
        "id": "B",
        "text": "{\"detail\": {\"state\": [\"! equals-ignore-case\": \"terminated\"]}}"
      },
      {
        "id": "C",
        "text": "{\"detail\": {\"state\": [\"equals-ignore-case\": \"terminated\"]}}"
      },
      {
        "id": "D",
        "text": "{\"detail\": {\"state\": [{\"anything-but\": {\"equals-ignore-case\": \"terminated\"}}]}}"
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-109",
    "type": "single",
    "stem": "A CloudOps engineer is working on cost savings for a company. The CloudOps engineer notices multiple unused Elastic IP addresses. The addresses are spread across different accounts and AWS Regions in an organization in AWS Organizations. The CloudOps engineer must administer and track the addresses based on security domains. The CloudOps engineer must be able to view the history of assigned addresses.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Enable AWS Config with an IP address tracking rule."
      },
      {
        "id": "B",
        "text": "Use Amazon CloudWatch with custom IP metrics to view addresses by account and Region."
      },
      {
        "id": "C",
        "text": "Enable Amazon VPC IP Address Manager for Organizations integrations."
      },
      {
        "id": "D",
        "text": "In AWS Systems Manager Inventory, enable a resource data sync to Amazon S3 for IP tracking."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-110",
    "type": "single",
    "stem": "A company has a software as a service (SaaS) application. The company has integrated the application with AWS services by using the AWS SDK and an IAM user's access key ID and secret access key. The company needs to implement the principle of least privilege for the IAM user. The company must avoid the usage of permanent credentials.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Migrate the application to use the AWS STS AssumeRoleWithSAML API operation."
      },
      {
        "id": "B",
        "text": "Migrate the application to use the AWS STS AssumeRole API operation. Allow the IAM user to call only AWS STS."
      },
      {
        "id": "C",
        "text": "Add a policy to the existing IAM user to scope the permissions to only the permissions that the user needs for the application."
      },
      {
        "id": "D",
        "text": "Add an IAM group to scope the permissions to only the permissions that the user needs for the application. Add the IAM user to the IAM group."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-111",
    "type": "single",
    "stem": "A company has many accounts in an organization in AWS Organizations. The company must automate resource provisioning from the organization's management account to the member accounts.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create an AWS CloudFormation change set. Deploy the change set to all member accounts."
      },
      {
        "id": "B",
        "text": "Create an AWS CloudFormation nested stack. Deploy the nested stack to all member accounts."
      },
      {
        "id": "C",
        "text": "Create an AWS CloudFormation stack set. Deploy the stack set to all member accounts."
      },
      {
        "id": "D",
        "text": "Create an AWS SAM template. Deploy the template to all member accounts."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-112",
    "type": "single",
    "stem": "A company's VPC has connectivity to an on-premises data center through an AWS Site-to-Site VPN. The company needs Amazon EC2 instances in the VPC to send DNS queries for example.com to the DNS servers in the data center.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon Route 53 Resolver inbound endpoint. Create a conditional forwarding rule on the on-premises DNS servers to forward DNS requests for example.com to the inbound endpoints."
      },
      {
        "id": "B",
        "text": "Create an Amazon Route 53 Resolver inbound endpoint. Create a forwarding rule on the resolver that sends all queries for example.com to the on-premises DNS servers. Associate this rule with the VPC."
      },
      {
        "id": "C",
        "text": "Create an Amazon Route 53 Resolver outbound endpoint. Create a conditional forwarding rule on the on-premises DNS servers to forward DNS requests for example.com to the outbound endpoints."
      },
      {
        "id": "D",
        "text": "Create an Amazon Route 53 Resolver outbound endpoint. Create a forwarding rule on the resolver that sends all queries for example.com to the on-premises DNS servers. Associate this rule with the VPC."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-113",
    "type": "single",
    "stem": "To comply with regulations, a CloudOps engineer needs to back up an Amazon EC2 Amazon Machine Image (AMI) to an Amazon S3 bucket. If the CloudOps engineer restores the AMI from the bucket in the future, the AMI must use the same AMI image ID as the original AMI.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create a copy of the AMI. Specify the destination S3 bucket. Set the launch permissions to implicit."
      },
      {
        "id": "B",
        "text": "Archive the snapshot that is associated with the AMI. Specify the S3 bucket as the archive destination."
      },
      {
        "id": "C",
        "text": "Create a store image task. Specify the image ID and the destination S3 bucket."
      },
      {
        "id": "D",
        "text": "Use the AWS CLI copy-image command. Specify the image ID and the destination S3 bucket."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-114",
    "type": "single",
    "stem": "A CloudOps engineer has blocked public access to all company Amazon S3 buckets. The CloudOps engineer wants to be notified when an S3 bucket becomes publicly readable in the future.",
    "ask": "What is the MOST operationally efficient way to meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create an AWS Lambda function that periodically checks the public access settings for each S3 bucket. Set up Amazon SNS to send notifications."
      },
      {
        "id": "B",
        "text": "Create a cron script that uses the S3 API to check the public access settings for each S3 bucket. Set up Amazon SNS to send notifications."
      },
      {
        "id": "C",
        "text": "Enable S3 Event Notifications for each S3 bucket. Subscribe S3 Event Notifications to an Amazon SNS topic."
      },
      {
        "id": "D",
        "text": "Enable the s3-bucket-public-read-prohibited managed rule in AWS Config. Subscribe the AWS Config rule to an Amazon SNS topic."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-115",
    "type": "single",
    "stem": "A company runs a three-tier web application on AWS. The application includes web servers, application servers, and database servers. The application servers process requests from the web servers. The company wants to ensure high availability of the application. Therefore, the company needs to monitor the health of the application servers and route traffic only to healthy instances.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Application Load Balancer (ALB) in front of the application servers with health checks for the application servers."
      },
      {
        "id": "B",
        "text": "Create an Amazon Route 53 health check for the application servers. Attach a Network Load Balancer (NLB) in front of the application servers."
      },
      {
        "id": "C",
        "text": "Create an AWS Lambda function that restarts an application server. Configure an Amazon CloudWatch alarm to monitor the health of the application servers. Run the function when an application is unhealthy."
      },
      {
        "id": "D",
        "text": "Create an Amazon CloudWatch metric to monitor the health of the application servers. Route traffic by using a Network Load Balancer (NLB)."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-116",
    "type": "single",
    "stem": "A company uses a custom Amazon Machine Image (AMI) as part of an EC2 Image Builder pipeline. A CloudOps engineer notices that the custom AMI will reach the end of its support lifespan in few months. The CloudOps engineer needs to update the EC2 Image Builder pipeline to use the latest AMI ID.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create a new version of the existing EC2 Image Builder recipe. Update the AMI ID details. Update the pipeline to use the new recipe version."
      },
      {
        "id": "B",
        "text": "Disable the AMI in the lifecycle rules for the existing AMI. Update the existing EC2 Image Builder recipe with the latest AMI ID details. Rerun the pipeline."
      },
      {
        "id": "C",
        "text": "Update the build component to use the latest AMI ID details."
      },
      {
        "id": "D",
        "text": "Replace the AMI ID in the launch template for the pipeline."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-117",
    "type": "single",
    "stem": "A company runs multiple Amazon EC2 instances that are distributed across multiple AWS Regions. The company uses AWS Systems Manager tools to manage the EC2 instances. The company needs to deploy an auditing software package onto every instance to record user logins and any actions that users take. A CloudOps engineer must implement a solution that automatically installs the auditing software on all existing EC2 instances. The solution also must automatically install the auditing software on any new EC2 instances when they are launched.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create a Systems Manager Distributor package that includes the auditing software. Store the package in an Amazon S3 bucket. Create a Systems Manager State Manager association in each Region to install the software package on all managed instances in the company's AWS account."
      },
      {
        "id": "B",
        "text": "Load the installer for the auditing software into an Amazon S3 bucket. Connect to every instance by using Systems Manager Fleet Manager Remote Desktop. Download the installer by using the AWS CLI. Run the installer manually."
      },
      {
        "id": "C",
        "text": "Create an AWS Lambda function that calls the software installer. Merge the auditing software into the Lambda function by using Lambda layers. Run the Lambda function from each instance by using a scheduled Amazon EventBridge rule."
      },
      {
        "id": "D",
        "text": "Create an Amazon EventBridge rule to react to Amazon EC2 RunInstances events. Configure the rule to modify the events to include a step that runs the software installer. Reboot all the instances."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-118",
    "type": "single",
    "stem": "A company is attempting to manage its costs in the AWS Cloud. A CloudOps engineer needs specific company-defined tags that are assigned to resources to appear on the billing report.",
    "ask": "What should the CloudOps engineer do to meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Activate the tags as AWS generated cost allocation tags."
      },
      {
        "id": "B",
        "text": "Activate the tags as user-defined cost allocation tags."
      },
      {
        "id": "C",
        "text": "Create a new cost category. Select the account billing dimension."
      },
      {
        "id": "D",
        "text": "Create a new AWS Cost and Usage Report. Include the resource IDs."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-119",
    "type": "single",
    "stem": "A company uses AWS Systems Manager to automate tasks across AWS accounts. The company uses monitoring tools to detect issues. The company creates a Systems Manager Automation runbook that runs an AWS Lambda function to remediate the issues. Initially, the company runs the runbook manually. Now, the company wants to automate running the runbook whenever the monitoring tools detect issues.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Configure the monitoring tools to publish findings to Amazon EventBridge. Create an EventBridge rule that invokes the runbook in response to events from the monitoring tools."
      },
      {
        "id": "B",
        "text": "Configure the monitoring tools to send findings to an Amazon SNS topic. Subscribe the runbook to the SNS topic. Invoke the runbook when a message is received."
      },
      {
        "id": "C",
        "text": "Configure the monitoring tools to write findings to Amazon CloudWatch Logs. Create a CloudWatch Logs subscription filter that invokes the runbook when new log entries are detected."
      },
      {
        "id": "D",
        "text": "Configure AWS Config to assess the resources and publish configuration changes to Amazon EventBridge. Create a rule to invoke the runbook in response to configuration change events."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-120",
    "type": "single",
    "stem": "A CloudOps engineer has created a VPC that contains a public subnet and a private subnet. Amazon EC2 instances that were launched in the private subnet cannot access the internet. The default network ACL is active on all subnets in the VPC, and all security groups allow all outbound traffic.",
    "ask": "Which solution will provide the EC2 instances in the private subnet with access to the internet?",
    "options": [
      {
        "id": "A",
        "text": "Create a NAT gateway in the public subnet. Create a route from the private subnet to the NAT gateway."
      },
      {
        "id": "B",
        "text": "Create a NAT gateway in the public subnet. Create a route from the public subnet to the NAT gateway."
      },
      {
        "id": "C",
        "text": "Create a NAT gateway in the private subnet. Create a route from the public subnet to the NAT gateway."
      },
      {
        "id": "D",
        "text": "Create a NAT gateway in the private subnet. Create a route from the private subnet to the NAT gateway."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-121",
    "type": "single",
    "stem": "A CloudOps engineer monitors and maintains the availability of resources in an AWS environment. The CloudOps engineer notices that the CPU utilization of an Amazon EC2 instance that runs web server software peaks above 80% at various times during each day. The CPU spikes correlate with peak daily loads. The high CPU load has resulted in performance issues for customers. The CloudOps engineer needs to resolve the system performance issue without causing any service disruptions.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Configure an Amazon CloudWatch alarm that invokes an AWS Systems Manager Automation runbook to vertically scale the EC2 instance when the CPU utilization exceeds 80%."
      },
      {
        "id": "B",
        "text": "Configure an AWS Systems Manager Automation runbook to run a script that automatically restarts the application when CPU utilization exceeds 80%."
      },
      {
        "id": "C",
        "text": "Configure an Amazon EventBridge rule that invokes an AWS Systems Manager Automation document. Configure the document to increase the EC2 instance size when CPU utilization exceeds 80%."
      },
      {
        "id": "D",
        "text": "Set up an Auto Scaling group with an Amazon CloudWatch alarm that triggers a scaling policy to launch additional EC2 instances when the CPU utilization exceeds 80%."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-122",
    "type": "single",
    "stem": "A company collects operating system logs in an Amazon CloudWatch Logs log group. The company wants a solution to automatically alert a support team if a specific exception appears in the logs more than 5 times within 10 minutes.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create a metric filter in the log group. Create an alarm based on the metric with a period of 10 minutes. Create an Amazon SNS topic. Point the alarm to the SNS topic. Subscribe the support team's email address to the SNS topic."
      },
      {
        "id": "B",
        "text": "Create a CloudWatch dashboard. Add a table widget to the dashboard. Populate the table with data from CloudWatch Logs Insights. Share the dashboard with the support team."
      },
      {
        "id": "C",
        "text": "Create an AWS Lambda subscription filter to send all logs that match the search pattern to a Lambda function. Create an Amazon SNS topic to receive notifications from the Lambda function. Subscribe the support team's email address to the SNS topic."
      },
      {
        "id": "D",
        "text": "Give the support team read-only access to the CloudWatch Logs log group so that the team can review the logs autonomously."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-123",
    "type": "single",
    "stem": "A company has a new security policy that requires all Amazon EBS volumes to be encrypted at rest. The company needs to use a custom key policy to manage access to the encryption keys. The company must rotate the keys once each year.",
    "ask": "Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      {
        "id": "A",
        "text": "Create AWS KMS symmetric customer managed keys. Enable automatic key rotation."
      },
      {
        "id": "B",
        "text": "Use AWS owned AWS KMS keys across the company's AWS environment."
      },
      {
        "id": "C",
        "text": "Create AWS KMS asymmetric customer managed keys. Enable automatic key rotation."
      },
      {
        "id": "D",
        "text": "Create AWS KMS symmetric customer managed keys by using imported key material. Rotate the keys on a yearly basis."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-124",
    "type": "single",
    "stem": "A school uses a web application to track student attendance. The application uses an Amazon API Gateway REST API and backend AWS Lambda functions. The application stores data in an Amazon DynamoDB table that is in on-demand capacity mode. Teachers report slow application performance at the same time every weekday. A CloudOps engineer notices that the performance problems happen only when the application demand suddenly increases. The application can handle the peak load if the load increases gradually. The CloudOps engineer must modify the application to resolve the performance issue.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Configure provisioned concurrency with scheduled auto scaling for the Lambda functions."
      },
      {
        "id": "B",
        "text": "Configure reserved concurrency with scheduled auto scaling for the Lambda functions."
      },
      {
        "id": "C",
        "text": "Change the DynamoDB table from on-demand capacity mode to provisioned capacity mode with auto scaling."
      },
      {
        "id": "D",
        "text": "Change the DynamoDB table from on-demand capacity mode to provisioned capacity mode. Set the provisioned capacity to match peak usage."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-125",
    "type": "single",
    "stem": "A company is hosting a public website on Amazon EC2 instances behind an Application Load Balancer (ALB). The company needs the website to support HTTPS connections.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Replace the ALB with a Network Load Balancer."
      },
      {
        "id": "B",
        "text": "Use AWS Certificate Manager (ACM) to issue a public SSL/TLS certificate. Configure the ALB to use the certificate."
      },
      {
        "id": "C",
        "text": "Import a public SSL/TLS certificate into AWS KMS. Configure the ALB to retrieve the certificate from AWS KMS."
      },
      {
        "id": "D",
        "text": "Attach a public SSL/TLS certificate to the target group that is associated with the ALB."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-126",
    "type": "single",
    "stem": "A CloudOps engineer needs to quickly resolve issues in an application that runs in a production environment on Amazon EC2 instances. The application uses an Amazon RDS database. To resolve the issues, the CloudOps engineer needs a centralized solution to collect and query logs for both the EC2 instances and the RDS database.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Install and configure the Amazon CloudWatch agent on the EC2 instances to forward ERROR log events to Amazon CloudWatch Logs. Configure the RDS database to export log events to CloudWatch Logs. Use CloudWatch Logs Insights to query the logs."
      },
      {
        "id": "B",
        "text": "Install and configure the Amazon CloudWatch agent on the EC2 instances to forward INFO log events to an Amazon S3 bucket. Install the CloudWatch agent on the RDS database. Forward ERROR log events to the S3 bucket. Configure S3 Event Notifications to invoke AWS Lambda functions to analyze the logs."
      },
      {
        "id": "C",
        "text": "Install and configure the Amazon CloudWatch agent on the EC2 instances to forward ERROR log events to Amazon CloudWatch Logs. Use the Logs & events menu to examine log events for the RDS database. Use CloudWatch Logs Insights to query logs only for the EC2 instances."
      },
      {
        "id": "D",
        "text": "Install and configure the AWS X-Ray agent on the EC2 instances to forward INFO, DEBUG, and latency log events to Amazon CloudWatch Logs. Configure the RDS database to export log events to Amazon CloudWatch Logs. Use CloudWatch Logs Insights to query the logs."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-127",
    "type": "single",
    "stem": "A company has business-critical resources in one of its AWS accounts. The company wants to receive an email notification every time an AWS Management Console root user sign-in event occurs in the account.",
    "ask": "Which solution will meet this requirement with the MOST operational efficiency?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon CloudWatch alarm that detects AWS Management Console root user sign-in events. Configure the alarm to send email notifications directly through AWS Trusted Advisor."
      },
      {
        "id": "B",
        "text": "Launch an Amazon EC2 instance. Schedule a script to run every hour to analyze AWS CloudTrail events. Configure the script to send email notifications to an Amazon SNS topic when AWS Management Console root user sign-in events occur."
      },
      {
        "id": "C",
        "text": "Create an Amazon EventBridge rule that reacts to AWS Management Console root user sign-in events. Configure the rule to send email notifications to an Amazon SQS queue."
      },
      {
        "id": "D",
        "text": "Create an Amazon EventBridge rule that reacts to AWS Management Console root user sign-in events. Configure the rule to send email notifications to an Amazon SNS topic."
      }
    ],
    "answer": [
      "D"
    ]
  },
  {
    "id": "SOA-C03-128",
    "type": "single",
    "stem": "A company's developers deploy applications to multiple AWS accounts. The developers are able to create any AWS resource within the AWS accounts. A security team wants to audit the resources that the developers created in the company's AWS accounts.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create an AWS account for the security team. Configure AWS Audit Manager in the security team's account. Create an Audit Manager assessment. Include the company's AWS accounts in the assessment scope. Generate an assessment report for the security team."
      },
      {
        "id": "B",
        "text": "Configure an AWS Config recorder in each AWS account. In the security team's AWS account, create an AWS Config aggregator. Authorize the aggregator in every AWS account. Use Amazon Quick Suite and Amazon Athena to generate a report for the security team."
      },
      {
        "id": "C",
        "text": "Create a trail in AWS CloudTrail in every AWS account. Create an Amazon RDS DB instance in the security team's account. Configure CloudTrail in every account to write logs to the DB instance. Use Amazon Quick Suite to query the DB instance and generate a report for the security team."
      },
      {
        "id": "D",
        "text": "Enable AWS Trusted Advisor in every AWS account. Create a scheduled Amazon EventBridge rule to periodically refresh the Trusted Advisor checks. Use the Trusted Advisor console to generate a report for the security team."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-129",
    "type": "single",
    "stem": "A company experiences increased production incidents. A CloudOps engineer must provide developers with secure access to Amazon EC2 instances from the AWS Management Console. The developers must be able to successfully connect by using EC2 Instance Connect for real-time troubleshooting. The EC2 instances are based on the latest Amazon Linux 2023 AMIs. The EC2 instances are publicly accessible. The EC2 instances have been properly configured with security groups that allow inbound SSH traffic. The developers will use the default ec2-user account to access the instances from the console.",
    "ask": "Which step should the CloudOps engineer perform NEXT to ensure that the developers can successfully connect by using EC2 Instance Connect?",
    "options": [
      {
        "id": "A",
        "text": "Create an IAM role with EC2 access. Attach the role to the EC2 instances."
      },
      {
        "id": "B",
        "text": "Download and install the EC2 Instance Connect agent on the production instances."
      },
      {
        "id": "C",
        "text": "Grant IAM permissions to the developers to use EC2 Instance Connect and describe the EC2 instances."
      },
      {
        "id": "D",
        "text": "Enable AWS CloudTrail logging. Create a VPC endpoint for EC2 Instance Connect."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-130",
    "type": "single",
    "stem": "A company asks a CloudOps engineer to provision an additional environment for an application in four additional AWS Regions. The application is running on more than 100 Amazon EC2 instances in the us-east-1 Region, using fully configured Amazon Machine Images (AMIs). The company has an AWS CloudFormation template to deploy resources in us-east-1.",
    "ask": "What should the CloudOps engineer do to provision the application in the MOST operationally efficient manner?",
    "options": [
      {
        "id": "A",
        "text": "Copy the AMI to each Region by using the aws ec2 copy-image command. Update the CloudFormation template to include mappings for the copied AMIs."
      },
      {
        "id": "B",
        "text": "Create a snapshot of the running instance. Copy the snapshot to the other Regions. Create an AMI from the snapshots. Update the CloudFormation template for each Region to use the new AMI."
      },
      {
        "id": "C",
        "text": "Run the existing CloudFormation template in each additional Region based on the success of the template that is used currently in us-east-1."
      },
      {
        "id": "D",
        "text": "Update the CloudFormation template to include the additional Regions in the Auto Scaling group. Update the existing stack in us-east-1."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-131",
    "type": "single",
    "stem": "A CloudOps engineer maintains the security and compliance of a company's AWS account. To ensure the company's Amazon EC2 instances are following company policy, a CloudOps engineer wants to terminate any EC2 instances that do not contain a department tag. Noncompliant resources must be terminated in near real time.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an AWS Config rule with the required-tags managed rule to identify noncompliant resources. Configure automatic remediation to run the AWS-TerminateEC2Instance automation runbook to terminate noncompliant resources."
      },
      {
        "id": "B",
        "text": "Create a new Amazon EventBridge rule to monitor when new EC2 instances are created. Send the event to an Amazon SNS topic for automatic remediation."
      },
      {
        "id": "C",
        "text": "Ensure all users who can create EC2 instances also have the permissions to use the ec2:CreateTags and ec2:DescribeTags actions. Change the instance's shutdown behavior to terminate."
      },
      {
        "id": "D",
        "text": "Ensure AWS Systems Manager Compliance is configured to manage the EC2 instances. Call the AWS-StopEC2Instances automation runbook to stop noncompliant resources."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-132",
    "type": "single",
    "stem": "A company has an application that processes events sequentially by using an Amazon SQS FIFO queue. The company needs a solution that automatically sends notifications to the SQS queue when new objects are uploaded to an Amazon S3 bucket. The solution must maintain message ordering.",
    "ask": "Which solution will meet these requirements with the LEAST operational overhead?",
    "options": [
      {
        "id": "A",
        "text": "Create an AWS Lambda function that polls the objects by using the ListObjectsV2 command and detects new objects when the objects are added. Configure the Lambda function to add a message to the SQS queue when new objects are detected."
      },
      {
        "id": "B",
        "text": "Create an event notification on the S3 bucket. Use the FIFO delivery option. Route the notifications to the existing SQS queue."
      },
      {
        "id": "C",
        "text": "Create an Amazon SNS FIFO topic. Create an event notification on the S3 bucket. Configure the event to send messages to the SNS topic. Subscribe the existing SQS queue to the SNS topic."
      },
      {
        "id": "D",
        "text": "Create an access point in Amazon S3 Access Points. Configure the access point to send new items to the existing SQS queue."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-133",
    "type": "single",
    "stem": "A company runs on-premises workloads that need to use AWS hosted DNS services. The company requires high availability for DNS queries to ensure continuous DNS resolution for critical applications.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Deploy Amazon Route 53 Resolver inbound endpoints to multiple Availability Zones. Configure on-premises DNS resolvers to use the endpoint IP addresses in a failover configuration."
      },
      {
        "id": "B",
        "text": "Use Amazon Route 53 latency-based routing to ensure that DNS queries from on-premises systems are directed to the closest resolver endpoint."
      },
      {
        "id": "C",
        "text": "Configure an Amazon Route 53 private hosted zone. Associate the private hosted zone with the on-premises network."
      },
      {
        "id": "D",
        "text": "Deploy Amazon Route 53 Resolver outbound endpoints to multiple Availability Zones. Associate the endpoints with the on-premises DNS resolvers."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-134",
    "type": "single",
    "stem": "A company runs an application on a fleet of Amazon EC2 Windows instances in a Multi-AZ deployment. The company needs a solution that will give the instances access to shared files. The solution must be highly available, must use native Windows storage capabilities, and must maximize consistency for all file requests.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Create an Amazon FSx for Windows File Server Multi-AZ file system. Map file shares on the instances by using the file system's DNS name."
      },
      {
        "id": "B",
        "text": "Grant the instances access to a shared Amazon S3 bucket. Use Windows Task Scheduler to synchronize the contents of the S3 bucket locally to each instance periodically."
      },
      {
        "id": "C",
        "text": "Create an Amazon EFS file system that uses the EFS Standard storage class. Mount the file system to the instances by using the file system's DNS name and the EFS mount helper."
      },
      {
        "id": "D",
        "text": "Create a new Amazon EBS Multi-Attach volume. Attach the EBS volume as an additional drive to each instance."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-135",
    "type": "single",
    "stem": "A CloudOps engineer is troubleshooting a VPC with public and private subnets that leverage custom network ACLs. Instances in the private subnet are unable to access the internet. There is an internet gateway attached to the public subnet. The private subnet has a route to a NAT gateway that is also attached to the public subnet. The Amazon EC2 instances are associated with the default security group for the VPC.",
    "ask": "What is causing the issue in this scenario?",
    "options": [
      {
        "id": "A",
        "text": "There is a network ACL on the private subnet set to deny all outbound traffic."
      },
      {
        "id": "B",
        "text": "There is no NAT gateway deployed in the private subnet of the VPC."
      },
      {
        "id": "C",
        "text": "The default security group for the VPC blocks all inbound traffic to the EC2 instances."
      },
      {
        "id": "D",
        "text": "The default security group for the VPC blocks all outbound traffic from the EC2 instances."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-136",
    "type": "single",
    "stem": "A CloudOps engineer configured AWS Backup to capture snapshots from a single Amazon EC2 instance that has one Amazon EBS volume attached. On the first snapshot, the EBS volume has 10 GiB of data. On the second snapshot, the EBS volume still contains 10 GiB of data, but 4 GiB have changed. On the third snapshot, 2 GiB of data have been added to the volume, for a total of 12 GiB.",
    "ask": "How much total storage is required to store these snapshots?",
    "options": [
      {
        "id": "A",
        "text": "12 GiB"
      },
      {
        "id": "B",
        "text": "16 GiB"
      },
      {
        "id": "C",
        "text": "26 GiB"
      },
      {
        "id": "D",
        "text": "32 GiB"
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-137",
    "type": "single",
    "stem": "A company needs to deploy a MySQL database on AWS to support an application. The database must be highly available and recoverable. The database must meet a recovery time objective (RTO) of 15 minutes. The database must meet a recovery point objective (RPO) of 5 minutes.",
    "ask": "Which solution will meet these requirements in the MOST operationally effective manner?",
    "options": [
      {
        "id": "A",
        "text": "Deploy a MySQL database in a single Availability Zone by using Amazon RDS. Enable automated backups."
      },
      {
        "id": "B",
        "text": "Deploy a MySQL database across two Availability Zones by using Amazon RDS with a Multi-AZ deployment. Enable point-in-time restore."
      },
      {
        "id": "C",
        "text": "Deploy a MySQL database across two Availability Zones by using Amazon EC2 instances. Configure database replication and Amazon EBS volume snapshots."
      },
      {
        "id": "D",
        "text": "Deploy a MySQL database across two Availability Zones by using Amazon RDS. Enable automated backups and database replication."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-138",
    "type": "single",
    "stem": "A company runs a web application on Amazon EC2 instances in an Auto Scaling group behind an Application Load Balancer (ALB). A CloudOps engineer must implement deployments without any service interruptions. The company needs the ability to shift traffic between application versions and quickly revert to the previous version by redirecting traffic if issues occur.",
    "ask": "Which deployment approach will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Use AWS CodeDeploy blue/green deployment with two ALB target groups. Deploy the new version to a separate fleet. Shift traffic gradually to the new target group. Maintain the original fleet for immediate rollback if necessary."
      },
      {
        "id": "B",
        "text": "Implement an in-place rolling update by using Auto Scaling instance refresh on the existing target group. Configure connection draining for each instance. Update the launch template. Rely on health checks during the replacement process."
      },
      {
        "id": "C",
        "text": "Create a new AMI by using the updated application. Modify the Auto Scaling launch template. Temporarily increase desired capacity to add new instances. Then terminate old instances while using ALB connection draining to manage the transition."
      },
      {
        "id": "D",
        "text": "Design an AWS Step Functions workflow that creates a parallel Auto Scaling group and updates monitoring configurations. Configure the workflow to change instance registrations on the ALB and automatically terminate the previous fleet after a verification period."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-139",
    "type": "single",
    "stem": "A company stores critical data in Amazon S3 buckets. A CloudOps engineer must build a solution to record all S3 API activity.",
    "ask": "Which action will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Configure S3 bucket metrics to record object access logs."
      },
      {
        "id": "B",
        "text": "Create an AWS CloudTrail trail to log data events for all S3 objects."
      },
      {
        "id": "C",
        "text": "Enable S3 server access logging for each S3 bucket."
      },
      {
        "id": "D",
        "text": "Use AWS IAM Access Analyzer for Amazon S3 to store object access logs."
      }
    ],
    "answer": [
      "B"
    ]
  },
  {
    "id": "SOA-C03-140",
    "type": "single",
    "stem": "A healthcare company uses Amazon SageMaker within a VPC to build machine learning (ML) models that use data that is stored in Amazon S3 buckets. The company wants to ensure that SageMaker accesses the data securely without using public IP addresses.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Create Amazon S3 gateway endpoints. Configure SageMaker to access the S3 buckets by using AWS PrivateLink."
      },
      {
        "id": "B",
        "text": "Provision a NAT gateway within the same VPC where the company runs SageMaker. Configure SageMaker to access the S3 buckets by using the NAT gateway."
      },
      {
        "id": "C",
        "text": "Configure an AWS Site-to-Site VPN connection to connect SageMaker to the S3 buckets."
      },
      {
        "id": "D",
        "text": "Configure AWS Transit Gateway to route traffic from SageMaker to the S3 buckets."
      }
    ],
    "answer": [
      "A"
    ]
  },
  {
    "id": "SOA-C03-141",
    "type": "single",
    "stem": "An ecommerce company hires a cybersecurity company to audit the ecommerce company's AWS account. The cybersecurity company requests read-only access to the account. The ecommerce company creates an IAM role, adds a trust relationship with the cybersecurity company's AWS account, and adds read-only permissions to the ecommerce company's account. An employee at the cybersecurity company unsuccessfully tries to assume the read-only role that the ecommerce company created. A CloudOps engineer at the ecommerce company must resolve the access issue.",
    "ask": "Which solution will meet this requirement?",
    "options": [
      {
        "id": "A",
        "text": "Configure multi-factor authentication (MFA)."
      },
      {
        "id": "B",
        "text": "Configure an identity provider by using OpenID Connect (OIDC)."
      },
      {
        "id": "C",
        "text": "Create a policy that allows the sts:AssumeRole action. Add the policy to the cybersecurity employee's role. Ensure that the resource for the policy is the role that the employee needs to assume."
      },
      {
        "id": "D",
        "text": "Create a policy that allows the sts:SetSourceIdentity action. Add the policy to the cybersecurity employee's role. Ensure that the resource for the policy is in the ecommerce company's account."
      }
    ],
    "answer": [
      "C"
    ]
  },
  {
    "id": "SOA-C03-142",
    "type": "single",
    "stem": "A company uses AWS Lambda to process files that users upload to an Amazon S3 bucket. When a user uploads a file to the S3 bucket, S3 Event Notifications invokes a Lambda function to process the file. The company wants to automatically invoke the Lambda function only for files with a .txt extension that users upload to the S3 bucket.",
    "ask": "Which solution will meet these requirements?",
    "options": [
      {
        "id": "A",
        "text": "Configure a Lambda function that is invoked by S3 PUT requests for .txt files in the S3 bucket."
      },
      {
        "id": "B",
        "text": "Configure a Lambda function that is invoked by S3 GET requests for .txt files in the S3 bucket."
      },
      {
        "id": "C",
        "text": "Configure an S3 bucket notification to send all object creation events to an Amazon SNS topic. Subscribe the Lambda function to the SNS topic. Apply a filter policy on the SNS topic for .txt file extensions."
      },
      {
        "id": "D",
        "text": "Modify the existing S3 Event Notifications configuration to send events for .txt file uploads to Amazon CloudWatch Logs to invoke the existing Lambda function."
      }
    ],
    "answer": [
      "A"
    ]
  }
],
};
