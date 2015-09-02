<?php

if( isset( $_POST['offer_ride'] ) )
{
	offerRide( $_POST['departure'] );
}

function offerRide( $departure )
{		
	echo $departure;
}