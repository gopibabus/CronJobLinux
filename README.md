# CronJobLinux
Creating cron job(node script) in Linux

### Create app.js file with logic to create new text file with name current time stamp

### Create app.sh file with your job and type `chmod +x app.sh`. This will make file executable!!

### Create new cron job

```
crontab -e
```

### Paste the following data (take file reference crontab.txt)

```
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │                                       7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │
# * * * * *  command_to_execute



###### Sample crontab ######

# Create new txt file for every minute
* * * * * /path/to/shellScript/app.sh
```

(OR)

### We can directly give task in crontab instead of creatinf app.sh file

```
# ┌───────────── minute (0 - 59)
# │ ┌───────────── hour (0 - 23)
# │ │ ┌───────────── day of month (1 - 31)
# │ │ │ ┌───────────── month (1 - 12)
# │ │ │ │ ┌───────────── day of week (0 - 6) (Sunday to Saturday;
# │ │ │ │ │                                       7 is also Sunday on some systems)
# │ │ │ │ │
# │ │ │ │ │
# * * * * *  command_to_execute



###### Sample crontab ######

# Create new txt file for every minute
* * * * * /path/to/nodejs /path/of/javaScriptFile/app.js
```

## How to find path to nodejs on ubuntu?

```
which nodejs
```

> I prefer creating .sh files for every new task (batch job).

> How to create cron timeset Online : [Reference](https://crontab.guru/) 

> How to Install node on Ubuntu : [Reference](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)

> How to create new file with javascript: [Reference](https://www.w3schools.com/nodejs/shownodejs_cmd.asp?filename=demo_fs_open)

> Creating CronJobs: [Reference](https://www.youtube.com/watch?v=QZJ1drMQz1A)
