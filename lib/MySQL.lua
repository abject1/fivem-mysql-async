MySQL = {
    Async = {},
    Sync = {},
}

local function safeParameters(params)
    if nil == params then
        return {[''] = ''}
    end

    assert(type(params) == "table", "A table is expected")

    if next(params) == nil then
        return {[''] = ''}
    end

    return params
end

--
--- ################################################## --
-- Execute une requete sans reponse, Version Synchrone --
--- ################################################## --
--
-- @param query
-- @param params
--
-- ############################################ --
-- @return return le nombre de colonne modifier --
-- ############################################ --
--

function MySQL.Sync.execute(query, params)
    assert(type(query) == "string" or type(query) == "number", "La requete SQL doit etre une string")

    local res = 0
    local finishedQuery = false
    exports['ABCore-sql']:mysql_execute(query, safeParameters(params), function (result)
        res = result
        finishedQuery = true
    end)
    repeat Citizen.Wait(0) until finishedQuery == true
    return res
end

--
-- ################################################################################## --
-- Execute une requete et retourne toute les valeur dans un tableau version synchrone --
-- ################################################################################## --
--
-- @param query
-- @param params
--
-- ######################################## --
-- @return tableau avec la reponse du fetch --
-- ######################################## --
--

function MySQL.Sync.fetchAll(query, params)
    assert(type(query) == "string" or type(query) == "number", "The SQL Query must be a string")

    local res = {}
    local finishedQuery = false
    exports['ABCore-sql']:mysql_fetch_all(query, safeParameters(params), function (result)
        res = result
        finishedQuery = true
    end)
    repeat Citizen.Wait(0) until finishedQuery == true
    return res
end

--
-- ######################################################################################## --
-- Execute une requette et fetch la premiere colone de la premiere ligne, version synchrone --
-- ######################################################################################## --
--
-- @param query
-- @param params
--
-- ############################################################# --
-- @return valeur mix de la premiere colone de la premiere ligne --
-- ############################################################# --
--

function MySQL.Sync.fetchScalar(query, params)
    assert(type(query) == "string" or type(query) == "number", "The SQL Query must be a string")

    local res = ''
    local finishedQuery = false
    exports['ABCore-sql']:mysql_fetch_scalar(query, safeParameters(params), function (result)
        res = result
        finishedQuery = true
    end)
    repeat Citizen.Wait(0) until finishedQuery == true
    return res
end

--
-- ########################################################################## --
-- Execute une requete et retourne de le dernier id inseret version synchrone --
-- ########################################################################## --
--
-- @param query
-- @param params
--
-- ###################################### --
-- @return retourn l'id du dernier insert --
-- ###################################### --
--

function MySQL.Sync.insert(query, params)
    assert(type(query) == "string" or type(query) == "number", "The SQL Query must be a string")

    local res = 0
    local finishedQuery = false
    exports['ABCore-sql']:mysql_insert(query, safeParameters(params), function (result)
        res = result
        finishedQuery = true
    end)
    repeat Citizen.Wait(0) until finishedQuery == true
    return res
end

--
-- ###################################### --
-- Stock une requete a executer plus tard --
-- ###################################### --
--
-- @param query
--

function MySQL.Sync.store(query)
    assert(type(query) == "string", "The SQL Query must be a string")

    local res = -1
    local finishedQuery = false
    exports['ABCore-sql']:mysql_store(query, function (result)
        res = result
        finishedQuery = true
    end)
    repeat Citizen.Wait(0) until finishedQuery == true
    return res
end

--- ##################################################################### --
-- Execute une liste de requete et retourne true quand elle sont executer --
--- ##################################################################### --
--
-- @param querys
-- @param params
--
-- ####################################### --
-- @return true si les requete sont passer --
-- ####################################### --
--
function MySQL.Sync.transaction(querys, params)
    local res = 0
    local finishedQuery = false
    exports['ABCore-sql']:mysql_transaction(querys, params, function (result)
        res = result
        finishedQuery = true
    end)
    repeat Citizen.Wait(0) until finishedQuery == true
    return res
end

--
-- ################################################## --
-- Execute une requete sans retour, version Asynchrone --
--- ################################################## --
--
-- @param query
-- @param params
-- @param func(int)
--

function MySQL.Async.execute(query, params, func)
    assert(type(query) == "string" or type(query) == "number", "The SQL Query must be a string")

    exports['ABCore-sql']:mysql_execute(query, safeParameters(params), func)
end

--
-- ############################################################################ --
-- Execute une requete et retourne toute les valeur de fetch Version Asynchrone --
-- ############################################################################ --
--
-- @param query
-- @param params
-- @param func(table)
--

function MySQL.Async.fetchAll(query, params, func)
    assert(type(query) == "string" or type(query) == "number", "The SQL Query must be a string")

    exports['ABCore-sql']:mysql_fetch_all(query, safeParameters(params), func)
end

--
-- ########################################################################################## --
-- Execute une requete et retourne la premiere colone de la premiere ligne version Asynchrone --
-- ########################################################################################## --
-- 
--
-- @param query
-- @param params
-- @param func(mixed)
--

function MySQL.Async.fetchScalar(query, params, func)
    assert(type(query) == "string" or type(query) == "number", "The SQL Query must be a string")

    exports['ABCore-sql']:mysql_fetch_scalar(query, safeParameters(params), func)
end

--
-- ################################################################### --
-- Execute une requete et retourne l'id de l'insert version asynchrone --
-- ################################################################### --
--
-- @param query
-- @param params
-- @param func(string)
--

function MySQL.Async.insert(query, params, func)
    assert(type(query) == "string" or type(query) == "number", "The SQL Query must be a string")

    exports['ABCore-sql']:mysql_insert(query, safeParameters(params), func)
end

--
-- ########################################################## --
-- Stock une requette a executer plus tard version asynchrone --
-- ########################################################## --
--
-- @param query
-- @param func(number)
--

function MySQL.Async.store(query, func)
    assert(type(query) == "string", "The SQL Query must be a string")

    exports['ABCore-sql']:mysql_store(query, func)
end

--
-- ######################################################################################## --
-- Execute une liste de requette et stock true quand elle sont effectuer version asynchrone --
-- ######################################################################################## --
--
-- @param querys
-- @param params
-- @param func(bool)
--

function MySQL.Async.transaction(querys, params, func)
    return exports['ABCore-sql']:mysql_transaction(querys, params, func)
end

function MySQL.ready (callback)
    Citizen.CreateThread(function ()
        -- add some more error handling
        while GetResourceState('ABCore-sql') ~= 'started' do
            Citizen.Wait(0)
        end
        while not exports['ABCore-sql']:is_ready() do
            Citizen.Wait(0)
        end
        callback()
    end)
end
