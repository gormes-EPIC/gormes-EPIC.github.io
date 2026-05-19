# Theme Park Simulation

## Objective
1. Debug incorrect ArrayList code

## Your Task
You have been hired as an external software consultant at a theme park. Their ride tracking software has not been working correctly, and they need your help to fix it. Correct all eight mistakes in the `ThemeParkTracker` class. All of the mistakes are in the `ThemeParkTracker`. The main method as written will not expose all of the errors. You will need to test each method individually to find them all. 

#### `Ride.java`
```
public class Ride {

    private String name;
    private int waitTime;
    private int thrillLevel;
    private String status;

    public Ride(String name, int waitTime, int thrillLevel, String status) {
        this.name = name;
        this.waitTime = waitTime;
        this.thrillLevel = thrillLevel;
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public int getWaitTime() {
        return waitTime;
    }

    public void setWaitTime(int waitTime) {
        this.waitTime = waitTime;
    }

    public int getThrillLevel() {
        return thrillLevel;
    }

    public String getStatus() {
        return status;
    }

    public String toString() {
        return name + " - Wait: " + waitTime +
                " mins, Thrill: " + thrillLevel +
                ", Status: " + status;
    }
}
```

#### `ThemeParkTracker.java`
```
import java.util.ArrayList;

public class ThemeParkTracker {

    private ArrayList<Ride> rides;

    public ThemeParkTracker() {
        rides = new ArrayList<>();
    }

    public void addRide(Ride ride) {
        rides.set(rides.size(), ride);
    }

    public Ride getRide(int index) {
        if (index > rides.size()) {
            return null;
        }

        return rides.get(index);
    }

    public void removeClosedRides() {
        for (int i = 0; i < rides.size(); i++) {
            if (rides.get(i).getStatus() == "closed") {
                rides.remove(i);
            }
        }
    }

    public void printRide(String name) {
        for (Ride ride : rides) {
            if (ride.getName() == name) {
                System.out.println(ride);
            }
        }
    }

    public void removeRide(int index) {
        if (index >= 0 && index <= rides.size()) {
            rides.remove(index);
        }
    }

    public void printAllRides() {
        for (int i = 0; i < rides.size() - 1; i++) {
            System.out.println(rides.get(i));
        }
    }

    public void sortByWaitTime() {

        for (int i = 0; i < rides.size(); i++) {

            for (int j = i + 1; j < rides.size(); j++) {

                if (rides.get(i).getWaitTime() > rides.get(j).getWaitTime()) {

                    int temp = rides.get(i).getWaitTime();

                    rides.get(i).setWaitTime(rides.get(j).getWaitTime());

                    rides.get(j).setWaitTime(temp);
                }
            }
        }
    }

    public String findRideStatus(String rideName) {

        for (Ride ride : rides) {

            if (ride.getName() == rideName) {
                return ride.getStatus();
            } else {
                return "Ride not found";
            }
        }

        return "No rides in tracker";
    }
}
```

#### `Main.java`
public class Main {

    public static void main(String[] args) {

        ThemeParkTracker tracker = new ThemeParkTracker();

        Ride ride1 = new Ride("Thunder Mountain", 45, 8, "open");
        Ride ride2 = new Ride("Splash Falls", 20, 5, "closed");
        Ride ride3 = new Ride("Dragon Coaster", 60, 10, "open");

        tracker.addRide(ride1);
        tracker.addRide(ride2);
        tracker.addRide(ride3);

        System.out.println("All Rides:");
        tracker.printAllRides();

        System.out.println("\nSearching for Dragon Coaster:");
        System.out.println(tracker.findRideStatus("Dragon Coaster"));

        System.out.println("\nSorting rides by wait time:");
        tracker.sortByWaitTime();
        tracker.printAllRides();

        System.out.println("\nRemoving closed rides:");
        tracker.removeClosedRides();
        tracker.printAllRides();

        System.out.println("\nRide at index 1:");
        System.out.println(tracker.getRide(1));
    }
}

## Deliverables Checklist
- [ ] Demonstrate a working program to your instructor in class
- [ ] A repository with your program attached to Google Classroom

## Rubric
- **6 points** - All required items are present.
- **5 points** - Task was completed, but supplementary materials are weak or missing.
- **4 points** - Task was attempted, but is missing major components.
- **3 points** - Did not attempt or student should reattempt.