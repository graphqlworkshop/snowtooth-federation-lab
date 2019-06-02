# Snowtooth Federation Lab

Snowtooth Mountain lift ops team has created a `Lift` service that provides lift status reporting for skiers and the ability to change the lift status for ski patrollers. The mountain ops team has created their own service to report on `Trail` status. These are completely separate GraphQL API's, and it is our job to turn them into federated apis that work under one gateway.

## Challenge 1: Create Federated Services (✅complete)

Now both services are still independent, but they are ready to be composed behind the gateway. Both services now have the query `_service { sdk }` available to expose their schema.

## Challenge 2: Create a Gateway

Now that we have federated services, we need to access them both from a single endpoint. Create a gateway services that allows me to query `allLifts` and `allTrails` from the same endpoint. The following query should work when sent to the gateway:

```graphql
query {
  allLifts {
    id
    name
  }
  allTrails {
    id
    name
  }
}
```

## Challenge 3: Extend the Trail Entity

From the `lifts` service, we need to extend the `Trail` entity. Add a field to `Trail` called `liftAccess` and resolve the `lift` types that access that trail. _Hint: the data for each lift contains a `trails` array_. Once complete the following query should work form the gateway:

```graphql
query {
  allTrails {
    id
    name
    liftAccess {
      id
      name
      status
    }
  }
}
```

## Challenge 4: Resolve external Trails

From the `lifts` service, we need to extend the `Lift` type to resolve `Trail` entities. The following query should work from the gateway:

```graphql
query {
  allLifts {
    id
    name
    trailAccess {
      name
      difficulty
      status
    }
  }
}
```

## Challenge 5: Add easiest Trail to Lift Service

The mountain ops team wants to provide an `easyWayDown` field for every lift so skiers will know the easiest route to the bottom no matter what lift they are on. The trail services has an algorithm for this, so we need to add an `easyWayDown` field to `Lift` entity from the trail service.

```graphql
query {
  allLifts {
    id
    name
    easyWayDown {
      name
      difficulty
      status
    }
  }
}
```
